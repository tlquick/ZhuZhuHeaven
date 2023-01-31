import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./components/navbar", () => () => {
  return <mock-nav data-testid="nav-1" />;
});

test("renders home page", () => {
  render(<App />);
});
