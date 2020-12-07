import { renderWithReduxAndRoute } from "../../../helpers/renderWithRedux";
import { PlanetResidents } from "../PlanetResidents";
import { fakePeopleData } from "../../../helpers/mockData";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Planet residents component test", () => {
  it("should receive data from store", () => {
    const { getAllByRole } = renderWithReduxAndRoute(<PlanetResidents />, {
      initialState: {
        planets: {
          planetResidents: fakePeopleData,
        },
      },
    });

    expect(getAllByRole("button")[0].textContent).toEqual(
      fakePeopleData[0].name
    );
  });

  it("should show message if data is empty", () => {
    const { getByText } = renderWithReduxAndRoute(<PlanetResidents />, {
      initialState: {
        planets: {
          planetResidents: [],
        },
      },
    });
    expect(
      getByText(/This planet doesn't have any residents!/i)
    ).toBeInTheDocument();
  });

  it("should route at the person details page", () => {
    const { getAllByRole, history } = renderWithReduxAndRoute(
      <PlanetResidents />,
      {
        initialState: {
          planets: {
            planetResidents: fakePeopleData,
          },
        },
      }
    );

    const button = getAllByRole("button")[0];
    userEvent.click(button);
    expect(history.location.pathname).toEqual(`/people/1`);
  });
});
