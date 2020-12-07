import { renderWithReduxAndRoute } from "../../../helpers/renderWithRedux";
import { StarshipPilots } from "../StarshipPilots";
import { fakePeopleData } from "../../../helpers/mockData";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("starship pilots component test", () => {
  it("should receive pilots data from store", () => {
    const { getAllByRole } = renderWithReduxAndRoute(<StarshipPilots />, {
      initialState: {
        starship: {
          starshipPilots: fakePeopleData,
        },
      },
    });

    expect(getAllByRole("button")[0].textContent).toEqual(
      fakePeopleData[0].name
    );
  });

  it("should show message if pilots data is empty", () => {
    const { getByText } = renderWithReduxAndRoute(<StarshipPilots />, {
      initialState: {
        starship: {
          starshipPilots: [],
        },
      },
    });

    expect(
      getByText(/This starship doesn't have pilots!/i)
    ).toBeInTheDocument();
  });

  it("should route at the person details page", () => {
    const { getAllByRole, history } = renderWithReduxAndRoute(
      <StarshipPilots />,
      {
        initialState: {
          starship: {
            starshipPilots: fakePeopleData,
          },
        },
      }
    );

    const button = getAllByRole("button")[0];
    userEvent.click(button);
    expect(history.location.pathname).toEqual(`/people/1`);
  });
});
