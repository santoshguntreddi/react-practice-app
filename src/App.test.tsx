import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./Routing", () => () => (
  <div data-testid="routing">Routing component</div>
));

describe("renders app", () => {
  test("renders app component with correct structure", () => {
    const { container } = render(
      <Router>
        <App />
      </Router>
    );
    expect(container.querySelector("header")).toBeInTheDocument();
    expect(screen.getByTestId("routing")).toBeInTheDocument();
  });
});
