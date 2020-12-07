import { fakePeopleData, fakeStarship } from "../../../helpers/mockData";
import { httpClient } from "../../../services/api";
import {
  selectPilotsIds,
  selectStarship,
  selectStarshipError,
  selectStarshipId,
  selectStarshipLoading,
  selectStarshipPilots,
} from "../starship";

describe("starships selectors test", () => {
  fakeStarship.pilots = [
    `${httpClient.baseUrl}/people/43/`,
    `${httpClient.baseUrl}/people/62/`,
  ];

  let state = {
    starship: {
      starship: fakeStarship,
      starshipPilots: fakePeopleData,
      loading: true,
      error: false,
      id: 23,
    },
  };

  it("should return data from starships store", () => {
    expect(selectStarshipId(state)).toEqual(23);
    expect(selectStarship(state)).toEqual(fakeStarship);
    expect(selectStarshipError(state)).toEqual(false);
    expect(selectStarshipLoading(state)).toEqual(true);
    expect(selectStarshipPilots(state)).toEqual(fakePeopleData);
    expect(selectPilotsIds(state)).toEqual(["43", "62"]);
  });
});
