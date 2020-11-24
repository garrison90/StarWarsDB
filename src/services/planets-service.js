import { httpClient } from "./api";
import { transformPlanet } from "../helpers/helpers";

const getAllPlanets = async () => {
  const response = await httpClient.get(`/planets/`);
  const planets = response.data.results;
  return planets.map(transformPlanet);
};

const getPlanet = async (id) => {
  const response = await httpClient(`/planets/${id}/`);
  const planet = response.data;
  return transformPlanet(planet);
};

export { getAllPlanets, getPlanet };
