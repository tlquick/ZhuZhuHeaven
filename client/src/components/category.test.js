import { render, screen, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import Category from "./category";
import axios from "axios";
jest.mock("axios");

jest.mock("./_itemcards", () => () => {
  return <mock-cards data-testid="cards-1" />;
});
beforeEach(async () => {
  axios.get.mockResolvedValueOnce({ data: mockData });
  await act(() => {
    render(<Category />);
  });
});
afterEach(() => {
  cleanup();
});

test("renders category page", () => {
  const categoryElement = screen.getByTestId("category-1");
  expect(categoryElement).toBeInTheDocument();
  expect(categoryElement).toContainHTML("div"); //contains a <div> tag})
});
test("Show all categories", async () => {
  userEvent.click(screen.getByText(/All/));
  const categoryElement = screen.getByTestId("category-count");
  expect(categoryElement).toBeInTheDocument();
  expect(categoryElement).toBeTruthy();
  expect(JSON.parse(categoryElement.textContent).length).toBe(9); //9 items in data
});
test("show only series 1", async () => {
  await act(async () => {
    const button = await screen.findByText(/Series 1/);
    userEvent.click(button);
  });
  const categoryElement = screen.getByTestId("category-count");

  expect(categoryElement).toBeInTheDocument();
  expect(categoryElement).toBeTruthy();
  expect(JSON.parse(categoryElement.textContent).length).toBe(2); //2 items in data
});
test("show only series 2", async () => {
  await act(async () => {
    const button = await screen.findByText(/Series 2/);
    userEvent.click(button);
  });
  const categoryElement = screen.getByTestId("category-count");

  expect(categoryElement).toBeInTheDocument();
  expect(categoryElement).toBeTruthy();
  expect(JSON.parse(categoryElement.textContent).length).toBe(1); //1 item in data
  expect(JSON.parse(categoryElement.textContent)[0].name).toEqual("jilly");
});
test("show only series 3", async () => {
  await act(async () => {
    const button = await screen.findByText(/Series 3/);
    userEvent.click(button);
  });
  const categoryElement = screen.getByTestId("category-count");

  expect(categoryElement).toBeInTheDocument();
  expect(categoryElement).toBeTruthy();
  expect(JSON.parse(categoryElement.textContent).length).toBe(1); //1 item in data
  expect(JSON.parse(categoryElement.textContent)[0].name).toEqual("moo");
});
test("show only series 4", async () => {
  await act(async () => {
    const button = await screen.findByText(/Series 4/);
    userEvent.click(button);
  });
  const categoryElement = screen.getByTestId("category-count");

  expect(categoryElement).toBeInTheDocument();
  expect(categoryElement).toBeTruthy();
  expect(JSON.parse(categoryElement.textContent).length).toBe(1); //1 item in data
  expect(JSON.parse(categoryElement.textContent)[0].name).toEqual("jinx");
});
test("show only series 5", async () => {
  await act(async () => {
    const button = await screen.findByText(/Series 5/);
    userEvent.click(button);
  });
  const categoryElement = screen.getByTestId("category-count");

  expect(categoryElement).toBeInTheDocument();
  expect(categoryElement).toBeTruthy();
  expect(JSON.parse(categoryElement.textContent).length).toBe(1); //1 item in data
  expect(JSON.parse(categoryElement.textContent)[0].name).toEqual("dezel");
});
test("show only series 6", async () => {
  await act(async () => {
    const button = await screen.findByText(/Series 6/);
    userEvent.click(button);
  });
  const categoryElement = screen.getByTestId("category-count");

  expect(categoryElement).toBeInTheDocument();
  expect(categoryElement).toBeTruthy();
  expect(JSON.parse(categoryElement.textContent).length).toBe(1); //1 item in data
  expect(JSON.parse(categoryElement.textContent)[0].name).toEqual("harlow");
});
test("show only series 7", async () => {
  await act(async () => {
    const button = await screen.findByText(/Series 7/);
    userEvent.click(button);
  });
  const categoryElement = screen.getByTestId("category-count");

  expect(categoryElement).toBeInTheDocument();
  expect(categoryElement).toBeTruthy();
  expect(JSON.parse(categoryElement.textContent).length).toBe(1); //1 item in data
  expect(JSON.parse(categoryElement.textContent)[0].name).toEqual("pookie");
});
test("show only Special Edition", async () => {
  await act(async () => {
    const button = await screen.findByText(/Special Edition/);
    userEvent.click(button);
  });
  const categoryElement = screen.getByTestId("category-count");

  expect(categoryElement).toBeInTheDocument();
  expect(categoryElement).toBeTruthy();
  expect(JSON.parse(categoryElement.textContent).length).toBe(1); //1 item in data
  expect(JSON.parse(categoryElement.textContent)[0].name).toEqual("yoyo");
});

test("matches category snapshot", () => {
  const tree = renderer.create(<Category />).toJSON();
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
  {
    _id: 4,
    series: 3,
    name: "moo",
    desc: "Moo is black and white with a pink nose",
    price: 200,
    image: "../image/moo.jpg",
  },
  {
    _id: 5,
    series: 4,
    name: "jinx",
    desc: "Jinx is grey and white with a pink nose",
    price: 200,
    image: "../image/jinx.jpg",
  },
  {
    _id: 6,
    series: 5,
    name: "dezel",
    desc: "Dezel is black and white with a pink nose",
    price: 200,
    image: "../image/dezel.jpg",
  },
  {
    _id: 7,
    series: 6,
    name: "harlow",
    desc: "Harlow is green and white with a pink nose",
    price: 200,
    image: "../image/harlow.jpg",
  },
  {
    _id: 8,
    series: 7,
    name: "pookie",
    desc: "Pookie is light pink and dark pink, with a pink nose",
    price: 200,
    image: "../image/pookie.jpg",
  },
  {
    _id: 9,
    series: 8,
    name: "yoyo",
    desc: "Yoyo is grey with a pink nose",
    price: 200,
    image: "../image/yoyo.jpg",
  },
];
