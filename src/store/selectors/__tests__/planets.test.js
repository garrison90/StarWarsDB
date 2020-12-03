import { fakePeopleData, fakePlanet } from "../../../helpers/mockData";
import { httpClient } from "../../../services/api";
import {
  selectPlanet,
  selectPlanetError,
  selectPlanetId,
  selectPlanetResidents,
  selectPlanetsLoading,
  selectResidents,
} from "../planets";

describe("planets selectors test", () => {
  fakePlanet.residents = [
    `${httpClient.baseUrl}/people/43/`,
    `${httpClient.baseUrl}/people/62/`,
  ];

  let state = {
    planets: {
      planet: fakePlanet,
      residents: fakePeopleData,
      loading: false,
      id: 35,
      error: false,
    },
  };

  it("should return items data", () => {
    expect(selectPlanet(state)).toEqual(fakePlanet);
    expect(selectResidents(state)).toEqual(fakePeopleData);
    expect(selectPlanetsLoading(state)).toEqual(false);
    expect(selectPlanetId(state)).toEqual(35);
    expect(selectPlanetError(state)).toEqual(false);
    expect(selectPlanetResidents(state)).toEqual(["43", "62"]);
  });
});
