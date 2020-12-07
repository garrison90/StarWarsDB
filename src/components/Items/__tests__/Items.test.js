import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { fakeStarships } from "../../../helpers/mockData";
import { Items } from "../Items";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("items component test", () => {
  let mockData;

  it("should accept data from items container", () => {
    mockData = {
      items: fakeStarships,
      fields: ["name", "model"],
      labels: ["Name", "Model"],
      lastStarshipElementRef: jest.fn(),
    };

    const { getByText } = render(<Items {...mockData} />);
    expect(getByText(/CR90 corvette/i)).toBeInTheDocument();
  });

  it("should forward to item details page", () => {
    const history = createMemoryHistory();
    mockData = {
      items: fakeStarships,
      fields: ["name", "model"],
      labels: ["Name", "Model"],
      lastStarshipElementRef: jest.fn(),
      move: jest.fn((id) => history.push(`/starships/${id}`)),
    };

    const { getByText } = render(
      <Router history={history}>
        <Items {...mockData} />
      </Router>
    );

    const starship = getByText(/CR90 corvette/i);
    userEvent.click(starship);
    expect(history.location.pathname).toEqual(`/starships/1`);
  });
});
