import { httpClient } from "./api";
import { transformPerson } from "../helpers/helpers";

const getAllPeople = async () => {
  const response = await httpClient.get(`/people/`);
  const people = response.data.results;
  return people.map(transformPerson);
};

const getPerson = async (id) => {
  const response = await httpClient.get(`/people/${id}/`);
  const person = response.data;
  return transformPerson(person);
};

export { getAllPeople, getPerson };
