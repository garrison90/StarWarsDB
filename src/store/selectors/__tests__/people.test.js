import {
  fakePerson,
  fakePlanet,
  fakeStarships,
} from "../../../helpers/mockData";
import { httpClient } from "../../../services/api";
import {
  selectPeopleError,
  selectPeopleLoading,
  selectPerson,
  selectPersonHomeworldId,
  selectPersonId,
  selectPersonPlanet,
  selectPersonStarships,
  selectPersonStarshipsIds,
} from "../people";

describe("people selectors test", () => {
  fakePerson.starships = [
    `${httpClient.baseUrl}/starships/12/`,
    `${httpClient.baseUrl}/starships/22/`,
  ];

  fakePerson.homeworld = `${httpClient.baseUrl}/planets/1/`;

  let state = {
    people: {
      selectedPerson: fakePerson,
      personHomeworld: fakePlanet,
      personStarships: fakeStarships,
      loading: false,
      error: true,
      id: 23,
    },
  };

  it("should return items data", () => {
    expect(selectPerson(state)).toEqual(fakePerson);
    expect(selectPersonPlanet(state)).toEqual(fakePlanet);
    expect(selectPeopleLoading(state)).toEqual(false);
    expect(selectPeopleError(state)).toEqual(true);
    expect(selectPersonId(state)).toEqual(23);
    expect(selectPersonStarshipsIds(state)).toEqual(["12", "22"]);
    expect(selectPersonHomeworldId(state)).toEqual("1");
    expect(selectPersonStarships(state)).toEqual(fakeStarships);
  });
});
