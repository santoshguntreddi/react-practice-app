import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "../../pages/home";

describe("renders home page", () => {
  test("renders the component with correct text", () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    expect(screen.getByText(/Welcome to My Website/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /This page helps to load dummy data of different categories/i
      )
    ).toBeInTheDocument();
    expect(screen.getByTestId("products-link")).toBeInTheDocument();
  });

  test("button has correct navigation link", () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    const productsButton = screen.getByTestId("products-link");
    expect(productsButton).toHaveAttribute("href", "/products");
  });
});
