import { httpClient } from "./api";
import { transformPlanet } from "../helpers/helpers";

export const getAllPlanets = async () => {
  const res = await httpClient.get(`/planets/`);
  return res.data.results.map(transformPlanet);
};

export const getPlanet = async (id) => {
  const planet = await httpClient(`/planets/${id}/`);
  return transformPlanet(planet);
};
