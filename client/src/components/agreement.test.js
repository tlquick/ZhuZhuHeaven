import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Agreement from "./agreement";
afterEach(() => {
  cleanup();
});
test("renders agreement page", () => {
  const { getByText } = render(<Agreement />);
  const agreementElement = screen.getByTestId("agreement-1");
  expect(agreementElement).toBeInTheDocument();
  expect(getByText("Customer Agreement")).toBeInTheDocument();
  expect(agreementElement).toContainHTML("p"); //contains a <p> tag
});
test("matches agreement snapshot", () => {
  const tree = renderer.create(<Agreement />).toJSON();
  expect(tree).toMatchSnapshot();
});
