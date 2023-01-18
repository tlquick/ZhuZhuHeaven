import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Privacy from "./privacy";
afterEach(() => {
  cleanup();
});
test("renders privacy page", () => {
  const { getByText } = render(<Privacy />);
  const privacyElement = screen.getByTestId("privacy-1");
  expect(privacyElement).toBeInTheDocument();
  expect(getByText("Privacy Policy")).toBeInTheDocument();
  expect(privacyElement).toContainHTML("p"); //contains a <p> tag
});
test("matches privacy snapshot", () => {
  const tree = renderer.create(<Privacy />).toJSON();
  expect(tree).toMatchSnapshot();
});
