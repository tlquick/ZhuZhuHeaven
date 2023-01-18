import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Cart from "./cart";
afterEach(() => {
  cleanup();
});
test("renders cart page", () => {
  render(<Cart />);
  const cartElement = screen.getByTestId("cart-1");
  expect(cartElement).toBeInTheDocument();
  expect(cartElement).toContainHTML("div"); //contains a <div> tag
});
test("matches cart snapshot", () => {
  const tree = renderer.create(<Cart />).toJSON();
  expect(tree).toMatchSnapshot();
});
