import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";
import SearchBar from "./searchbar";
import axios from "axios";
jest.mock("axios");
const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));
const handleSearch = jest.fn();
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

beforeEach(async () => {
  await axios.get.mockResolvedValue({
    data: JSON.parse(JSON.stringify(mockData)),
  });
  await act(() => {
    render(<SearchBar />);
  });
});

afterEach(() => {
  cleanup();
});

test("renders searchbar ", async () => {
  await act(() => {
    const searchElement = screen.getByTestId("search-1");
    expect(searchElement).toBeInTheDocument();
  });
});
