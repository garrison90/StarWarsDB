import { httpClient } from "./api";
import { idRegExp, transformPerson } from "../helpers/helpers";
import { getStarship } from "./starships-service";

export const getAllPeople = async () => {
  const response = await httpClient.get(`/people/`);
  const people = response.data.results;
  return people.map(transformPerson);
};

export const getPerson = async (id) => {
  const response = await httpClient.get(`/people/${id}/`);
  const person = response.data;
  return transformPerson(person);
};

export const getPersonStarships = async (starships) => {
  let starshipsId = starships.map((starship) => starship.match(idRegExp)[1]);
  let requests = await starshipsId.map((starship) => getStarship(starship));
  let response = await Promise.all(requests);
  return response;
};
