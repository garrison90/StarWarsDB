import { httpClient } from "./api";
import { extractId, transformPlanet } from "../helpers/helpers";

export const getAllPlanets = async () => {
  const res = await httpClient.get(`/planets/`);
  return res.data.results.map(transformPlanet);
};

export const getPlanet = async (id) => {
  const planet = await httpClient(`/planets/${id}/`);
  return transformPlanet(planet.data);
};

export const getPlanetResidenst = async(urls) => {
  let requests = await urls.map(url=>httpClient.get(url));
  let response = await Promise.all(requests);

  let residents = response.map(res=>{return {
    name: res.data.name,
    id: res.data.url.match(/\/([0-9]*)\/$/)[1]
  }});
  return residents
}
