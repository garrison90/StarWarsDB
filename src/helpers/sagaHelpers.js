import { getAllPeople } from "../services/people-service";
import { getAllPlanets } from "../services/planets-service";
import { getAllStarships } from "../services/starships-service";

export const requestTypes = {
  people: "items/getAllPeopleRequest",
  planets: "items/getPlanetsDataRequest",
  starships: "items/getStarshipsRequest",
};

export const sagaHelper = {
  [requestTypes.people]: { fn: getAllPeople, pathname: "/people" },
  [requestTypes.planets]: { fn: getAllPlanets, pathname: "/planets" },
  [requestTypes.starships]: { fn: getAllStarships, pathname: "/starships" },
};
