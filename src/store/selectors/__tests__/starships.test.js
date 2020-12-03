import { fakePeopleData, fakeStarship } from "../../../helpers/mockData";
import { httpClient } from "../../../services/api";
import {
  selectPilotsIds,
  selectStarship,
  selectStarshipId,
  selectStarshipPilots,
  selectStarshipsError,
  selectStarshipsLoading,
} from "../starships";

describe("starships selectors test", () => {
  fakeStarship.pilots = [
    `${httpClient.baseUrl}/people/43/`,
    `${httpClient.baseUrl}/people/62/`,
  ];

  let state = {
    starships: {
      starship: fakeStarship,
      pilots: fakePeopleData,
      loading: true,
      error: false,
      id: 23,
    },
  };

  it("should return data from starships store", () => {
    expect(selectStarship(state)).toEqual(fakeStarship);
    expect(selectStarshipPilots(state)).toEqual(fakePeopleData);
    expect(selectStarshipsLoading(state)).toEqual(true);
    expect(selectStarshipsError(state)).toEqual(false);
    expect(selectStarshipId(state)).toEqual(23);
    expect(selectPilotsIds(state)).toEqual(["43", "62"]);
  });
});
