import { httpClient } from "./api";
import { transformPlanet } from "../helpers/helpers";

const getAllPlanets = async ([query, pageNumber]) => {
  const params = { search: query, page: pageNumber };
  const response = await httpClient.get(`/planets/`, { params });
  const itemsData = response.data.results;
  const items = itemsData.map(transformPlanet);
  return {
    next: response.data.next,
    items: items,
  };
};

const getPlanet = async (id) => {
  const response = await httpClient(`/planets/${id}/`);
  const planet = response.data;
  return transformPlanet(planet);
};

export { getAllPlanets, getPlanet };
