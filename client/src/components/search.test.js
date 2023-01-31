import { BrowserRouter } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Search from "./search";
jest.mock("./_itemcards", () => () => {
  return <mock-cards data-testid="items-1" />;
});
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: JSON.stringify(mockData),
  }),
}));
afterEach(() => {
  cleanup();
});
test("renders search page", () => {
  render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );
  const searchElement = screen.getByTestId("searchResults-1");
  expect(searchElement).toBeInTheDocument();
  expect(searchElement).toContainHTML("div"); //contains a <div> tag
});
test("matches search snapshot", () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});

const mockData = [
  {
    _id: 1,
    series: 1,
    name: "mr squiggles",
    desc: "Mr Squiggles is brown and white with a pink nose",
    price: 220,
    image: "../image/mrsquiggles.jpg",
  },
];
