import { httpClient } from "./api";
import { transformPerson } from "../helpers/helpers";

const getAllPeople = async ([query, pageNumber]) => {
  const params = { search: query, page: pageNumber };
  const response = await httpClient.get(`/people/`, { params });
  const itemsData = response.data.results;
  const items = itemsData.map(transformPerson);
  return {
    next: response.data.next,
    items,
  };
};

const getPerson = async (id) => {
  const response = await httpClient.get(`/people/${id}/`);
  const person = response.data;
  return transformPerson(person);
};

export { getAllPeople, getPerson };
