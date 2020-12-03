import React from "react";
import {
  fakePerson,
  fakePlanet,
  fakeStarships,
} from "../../../helpers/mockData";
import { Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import PersonDetails from "../PersonDetails";

describe("person details component test", () => {
  let mockData;

  it("should assept data from person details container", () => {
    mockData = {
      starships: fakeStarships,
      homeworld: fakePlanet,
      person: fakePerson,
    };

    const { getByText } = render(<PersonDetails {...mockData} />);
    expect(getByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(getByText(/Dagobah/i)).toBeInTheDocument();
    expect(getByText(/Sentinel-class landing craft/i)).toBeInTheDocument();
  });

  it("should show loader in case of loading true", () => {
    const loading = true;
    const { container } = render(<PersonDetails loading={loading} />);
    expect(container.querySelector("wrapper")).not.toBeInTheDocument();
  });

  it("should show error component in case of error", () => {
    const error = true;
    const { container } = render(<PersonDetails error={error} />);
    expect(container.querySelector("wrapper")).not.toBeInTheDocument();
  });

  it("should show default paragraph if starships data empty", () => {
    mockData = {
      person: fakePerson,
      homeworld: fakePlanet,
      starships: [],
    };
    const { getByText } = render(<PersonDetails {...mockData} />);
    expect(
      getByText(/This person doesn't have any starship!/i)
    ).toBeInTheDocument();
  });

  it("should forward to planet page and to starship page", () => {
    const history = createMemoryHistory();
    mockData = {
      starships: fakeStarships,
      homeworld: fakePlanet,
      person: fakePerson,
      move: jest.fn((id) => history.push(`${id}`)),
    };

    render(
      <Router history={history}>
        <PersonDetails {...mockData} />
      </Router>
    );
    const items = screen.getAllByTestId("starship-item");
    userEvent.click(items[0]);
    expect(history.location.pathname).toEqual(`/starships/1`);

    const planet = screen.getByTestId("planet-item");
    userEvent.click(planet);
    expect(history.location.pathname).toEqual(`/planets/4`);
  });
});
