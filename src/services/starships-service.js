import { transformStarship } from "../helpers/helpers";
import { httpClient } from "./api";

const getAllStarships = async ([query, pageNumber]) => {
  const params = { search: query, page: pageNumber };
  const response = await httpClient.get(`/starships/`, { params });
  const itemsData = response.data.results;
  let items = itemsData.map(transformStarship);
  return {
    next: response.data.next,
    items: items,
  };
};

const getStarship = async (id) => {
  const response = await httpClient.get(`/starships/${id}/`);
  const starship = response.data;
  return transformStarship(starship);
};

export { getAllStarships, getStarship };
