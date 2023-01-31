import { BrowserRouter } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Signup from "./signup";
const mockedUsedNavigate = jest.fn();
const AuthService = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
beforeEach(() => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
});

afterEach(() => {
  cleanup();
});
test("renders signup page", () => {
  const signupElement = screen.getByTestId("signup-1");
  expect(signupElement).toBeInTheDocument();
  expect(signupElement).toContainHTML("img"); //contains a <img> tag
  expect(signupElement).toContainHTML("form"); //contains a <form> tag
});
test("matches signup snapshot", () => {
  const tree = renderer.create(<Signup />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("signin link redirects", () => {
  userEvent.click(screen.getByText(/Sign In/));
  expect(
    screen.getByRole("button", {
      name: /Sign Up/i,
    })
  ).toBeInTheDocument();
});
test("alert when fields are empty", async () => {
  global.alert = jest.fn();
  const buttonElement = screen.getByRole("button");
  await userEvent.click(buttonElement);
  expect(global.alert).toHaveBeenCalledTimes(1);
});
