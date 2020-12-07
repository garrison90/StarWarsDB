import { renderWithReduxAndRoute } from "../../../helpers/renderWithRedux";
import { fakePlanet } from "../../../helpers/mockData";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { PersonPlanet } from "../PersonPlanet";
import { screen } from "@testing-library/react";

describe("person planet component test", () => {
  it("should receive data from store", () => {
    const { getByRole } = renderWithReduxAndRoute(<PersonPlanet />, {
      initialState: {
        people: {
          personHomeworld: fakePlanet,
        },
      },
    });

    expect(getByRole("button").textContent).toEqual(fakePlanet.name);
  });

  it("should route at the planet details page", () => {
    const { getByRole, history } = renderWithReduxAndRoute(<PersonPlanet />, {
      initialState: {
        people: {
          personHomeworld: fakePlanet,
        },
      },
    });

    const button = getByRole("button");
    userEvent.click(button);
    expect(history.location.pathname).toEqual(`/planets/4`);
  });
});
