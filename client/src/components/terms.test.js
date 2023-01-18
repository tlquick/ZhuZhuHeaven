import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Terms from "./terms";
afterEach(() => {
  cleanup();
});
test("renders terms page", () => {
  const { getByText } = render(<Terms />);
  const termsElement = screen.getByTestId("terms-1");
  expect(termsElement).toBeInTheDocument();
  expect(getByText("Terms and Conditions")).toBeInTheDocument(); //sub string test - toHaveTextContent is exact match
  expect(termsElement).toContainHTML("p"); //contains a <p> tag
});
test("matches terms snapshot", () => {
  const tree = renderer.create(<Terms />).toJSON();
  expect(tree).toMatchSnapshot();
});
