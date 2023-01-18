import { BrowserRouter } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Signin from "./signin";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
afterEach(() => {
  cleanup();
});
test("renders signin page", () => {
  render(
    <BrowserRouter>
      <Signin />
    </BrowserRouter>
  );
  const signinElement = screen.getByTestId("signin-1");
  expect(signinElement).toBeInTheDocument();
  expect(signinElement).toContainHTML("img"); //contains a <img> tag
  expect(signinElement).toContainHTML("form"); //contains a <form> tag
});
test("matches signin snapshot", () => {
  const tree = renderer.create(<Signin />).toJSON();
  expect(tree).toMatchSnapshot();
});
