import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../../components/header";

describe("Renders Header", () => {
  test("'renders the header with the correct title", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const title = screen.getByText(/React App/i);
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute("href", "/");
  });

  test("renders all navigation links and navigates to correct route on click", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const productsLink = screen.getByText(/Products/i);
    const usersLink = screen.getByText(/Users/i);
    const weatherLink = screen.getByText(/Weather/i);

    expect(productsLink).toBeInTheDocument();
    expect(usersLink).toBeInTheDocument();
    expect(weatherLink).toBeInTheDocument();

    expect(productsLink).toHaveAttribute("href", "/products");
    expect(usersLink).toHaveAttribute("href", "/users");
    expect(weatherLink).toHaveAttribute("href", "/weather");

    fireEvent.click(productsLink);
    expect(window.location.pathname).toBe("/products");

    fireEvent.click(usersLink);
    expect(window.location.pathname).toBe("/users");

    fireEvent.click(weatherLink);
    expect(window.location.pathname).toBe("/weather");
  });

  test("renders AppBar with correct structure and styles", () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>
    );

    const appBar = container.querySelector("header");
    expect(appBar).toBeInTheDocument();
    expect(appBar).toHaveStyle("position: fixed");
  });
});
