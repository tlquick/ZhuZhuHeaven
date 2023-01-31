import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import ItemCards from "./_itemcards";

afterEach(() => {
  cleanup();
});
test("renders itemcards page", async () => {
  render(<ItemCards items={mockedData} />);
  const element = screen.getByTestId("itemcards-1");
  expect(element).toBeInTheDocument();
  expect(element).toContainHTML("div"); //contains a <div> tag
  const items = screen.getAllByTestId("itemcards-2");
  expect(items.length).toBe(3);
});
test("matches itemcards snapshot", () => {
  const tree = renderer.create(<ItemCards items={mockedData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
const mockedData = [
  {
    _id: 1,
    series: 1,
    name: "mr squiggles",
    desc: "Mr Squiggles is brown and white with a pink nose",
    price: 220,
    image: "../image/mrsquiggles.jpg",
  },
  {
    _id: 2,
    series: 1,
    name: "pipsqueak",
    desc: "Pipsqueak is yellow and white with a pink nose",
    price: 200,
    image: "../image/pipsqueak.jpg",
  },
  {
    _id: 3,
    series: 2,
    name: "jilly",
    desc: "Jilly is pink and white with a pink nose",
    price: 200,
    image: "../image/jilly.jpg",
  },
];
