import { BrowserRouter } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Signup from "./signup";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
afterEach(() => {
  cleanup();
});
test("renders signup page", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
  const signupElement = screen.getByTestId("signup-1");
  expect(signupElement).toBeInTheDocument();
  expect(signupElement).toContainHTML("img"); //contains a <img> tag
  expect(signupElement).toContainHTML("form"); //contains a <form> tag
});
test("matches signup snapshot", () => {
  const tree = renderer.create(<Signup />).toJSON();
  expect(tree).toMatchSnapshot();
});
