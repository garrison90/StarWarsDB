import { transformPerson, transformStarship } from "../helpers/helpers";
import { httpClient } from "./api";

export const getAllStarships = async (query = "") => {
  const response = await httpClient.get(`starships${query}`);
  const starships = response.data.results;
  return starships.map(transformStarship);
};

export const getStarship = async (id) => {
  const response = await httpClient.get(`/starships/${id}/`);
  const starship = response.data;
  return transformStarship(starship);
};

export const getStarshipPilots = async (pilots) => {
  let requests = await pilots.map((pilot) => httpClient.get(pilot));
  let response = await Promise.all(requests);
  return response.map(({ data }) => transformPerson(data));
};
