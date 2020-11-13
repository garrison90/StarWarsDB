import { httpClient } from "./api";
import { transformPerson } from "../helpers/helpers";

const getAllPeople = async () => {
  const res = await this.getResource(`/people/`);
  console.log(res);
  return res.results.map(transformPerson);
};

export const getPerson = async (id) => {
  const person = await httpClient.get(`/people/${id}/`);
  return transformPerson(person.data);
};

/* export const getPersonHomeworld = async (url) => {
  const planet = await httpClient.get(url);
  return transformPlanet(planet.data);
};

const transformPlanet = (planet) => {
  return {
    id: extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
  };
}; */
