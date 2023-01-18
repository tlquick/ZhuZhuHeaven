import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Sitemap from "./sitemap";
afterEach(() => {
  cleanup();
});
test("renders sitemap page", () => {
  const { getByText } = render(<Sitemap />);
  const sitemapElement = screen.getByTestId("sitemap-1");
  expect(sitemapElement).toBeInTheDocument();
  expect(getByText("Sitemap")).toBeInTheDocument();
  expect(sitemapElement).toContainHTML("p"); //contains a <p> tag
});
test("matches sitemap snapshot", () => {
  const tree = renderer.create(<Sitemap />).toJSON();
  expect(tree).toMatchSnapshot();
});
