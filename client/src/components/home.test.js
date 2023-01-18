import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Home from "./home";
afterEach(() => {
  cleanup();
});
test("renders home page", () => {
  render(<Home />);
  const homeElement = screen.getByTestId("home-1");
  expect(homeElement).toBeInTheDocument();
  expect(homeElement).toContainHTML("div"); //contains a <div> tag
});
test("matches home snapshot", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
