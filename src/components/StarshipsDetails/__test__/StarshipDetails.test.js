import React from "react";
import { fakePeopleData, fakeStarship } from "../../../helpers/mockData";
import StarshipDetails from "../StarshipDetails";
import { Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("starship details component test", () => {
  let mockData;

  it("should assept data from starship details container", () => {
    mockData = {
      starship: fakeStarship,
      pilots: fakePeopleData,
    };

    const { getByText } = render(<StarshipDetails {...mockData} />);

    expect(getByText(/Millennium Falcon/i)).toBeInTheDocument();
    expect(getByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(getByText(/R2-D2/i)).toBeInTheDocument();
  });

  it("should show loader in case of loading true", () => {
    const loading = true;
    const { container } = render(<StarshipDetails loading={loading} />);
    expect(container.querySelector("wrapper")).toBeNull();
  });

  it("should show error component in case of error", () => {
    const error = true;
    const { container } = render(<StarshipDetails error={error} />);
    expect(container.querySelector("wrapper")).toBeNull();
  });

  it("should show default paragraph if pilots data empty", () => {
    mockData = {
      starship: fakeStarship,
      pilots: [],
    };
    const { getByText } = render(<StarshipDetails {...mockData} />);
    const element = getByText(/This starship doesn't have any pilot!/i);
    expect(element).toBeInTheDocument();
  });

  it("should forward to pilot data page", () => {
    const history = createMemoryHistory();
    mockData = {
      starship: fakeStarship,
      pilots: fakePeopleData,
      move: jest.fn((id) => history.push(`/people/${id}`)),
    };

    render(
      <Router history={history}>
        <StarshipDetails {...mockData} />
      </Router>
    );

    const items = screen.getAllByTestId("pilot-item");
    userEvent.click(items[0]);
    expect(history.location.pathname).toEqual(`/people/1`);
  });
});
