import { renderWithReduxAndRoute } from "../../../helpers/renderWithRedux";
import { fakeStarships } from "../../../helpers/mockData";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { PersonPlanet } from "../PersonPlanet";
import { PersonStarships } from "../PersonStarships";

describe("person staships component test", () => {
  it("should receive data from store", () => {
    const { getAllByRole } = renderWithReduxAndRoute(<PersonStarships />, {
      initialState: {
        people: {
          personStarships: fakeStarships,
        },
      },
    });

    expect(getAllByRole("button")[0].textContent).toEqual(
      fakeStarships[0].name
    );
  });

  it("should show message if data is empty ", () => {
    const { getByText } = renderWithReduxAndRoute(<PersonStarships />, {
      initialState: {
        people: {
          personStarships: [],
        },
      },
    });

    expect(
      getByText(`This person doesn't have any starship!`)
    ).toBeInTheDocument();
  });

  it("should route at the starship details page", () => {
    const { getAllByRole, history } = renderWithReduxAndRoute(
      <PersonStarships />,
      {
        initialState: {
          people: {
            personStarships: fakeStarships,
          },
        },
      }
    );

    const button = getAllByRole("button")[1];
    userEvent.click(button);
    expect(history.location.pathname).toEqual(`/starships/2`);
  });
});
