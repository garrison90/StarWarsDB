import { httpClient } from "./api";
import { transformPerson, transformPlanet } from "../helpers/helpers";

export const getAllPlanets = async () => {
  const response = await httpClient.get(`/planets/`);
  const planets = response.data.results;
  return planets.map(transformPlanet);
};

export const getPlanet = async (id) => {
  const response = await httpClient(`/planets/${id}/`);
  const planet = response.data;
  return transformPlanet(planet);
};

export const getPlanetResidents = async (urls) => {
  let requests = await urls.map((url) => httpClient.get(url));
  let response = await Promise.all(requests);
  let residents = response.map(({ data }) => transformPerson(data));
  return residents;
};
