import { BrowserRouter } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import NavBar from "./navbar";
const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));
jest.mock("./searchbar", () => () => {
  return <mock-search data-testid="search-1" />;
});
afterEach(() => {
  cleanup();
});
test("renders navbar component", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const navbarElement = screen.getByTestId("navbar-1");
  expect(navbarElement).toBeInTheDocument();
  expect(navbarElement).toContainHTML("img"); //contains a <img> tag
  expect(navbarElement).toContainHTML("a"); //contains a <a> tag
});
test("matches navbar snapshot", () => {
  const tree = renderer.create(<NavBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
