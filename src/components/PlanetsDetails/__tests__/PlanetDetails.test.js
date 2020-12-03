import React from "react";
import { fakePeopleData, fakePlanet } from "../../../helpers/mockData";
import { Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import PlanetDetails from "../PlanetDetails";

describe("planet details component test", () => {
  let mockData;

  it("should assept data from starship details container", () => {
    mockData = {
      planet: fakePlanet,
      residents: fakePeopleData,
    };

    const { getByText } = render(<PlanetDetails {...mockData} />);

    expect(getByText(/Dagobah/i)).toBeInTheDocument();
    expect(getByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(getByText(/R2-D2/i)).toBeInTheDocument();
  });

  it("should show loader in case of loading true", () => {
    const loading = true;
    const { container } = render(<PlanetDetails loading={loading} />);
    expect(container.querySelector("wrapper")).toBeNull();
  });

  it("should show error component in case of error", () => {
    const error = true;
    const { container } = render(<PlanetDetails error={error} />);
    expect(container.querySelector("wrapper")).toBeNull();
  });

  it("should show default paragraph if residents data empty", () => {
    mockData = {
      planet: fakePlanet,
      residents: [],
    };
    const { getByText } = render(<PlanetDetails {...mockData} />);
    expect(
      getByText(/This planet doesn't have any resident!/i)
    ).toBeInTheDocument();
  });

  it("should forward to resident page", () => {
    const history = createMemoryHistory();
    mockData = {
      planet: fakePlanet,
      residents: fakePeopleData,
      move: jest.fn((id) => history.push(`/people/${id}`)),
    };

    render(
      <Router history={history}>
        <PlanetDetails {...mockData} />
      </Router>
    );

    const items = screen.getAllByTestId("resident-item");
    userEvent.click(items[0]);
    expect(history.location.pathname).toEqual(`/people/1`);
  });
});
