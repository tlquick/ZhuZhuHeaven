import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Footer from "./footer";
afterEach(() => {
  cleanup();
});
test("renders footer page", () => {
  render(<Footer />);
  const footerElement = screen.getByTestId("footer-1");
  expect(footerElement).toBeInTheDocument();
  expect(footerElement).toContainHTML("p"); //contains a <p> tag
  expect(footerElement).toContainHTML("a"); //contains a <a> tag
});
test("matches footer snapshot", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
