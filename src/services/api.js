import axios from "axios";
import { extractId } from "../helpers/helpers";

export const httpClient = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const getAllStarships = async (query) => {
  const res = await httpClient.get("starships" + query);
  return res.data.results.map(transformStarship);
};

/* export const getAllStarships = async () => {
  const res = await httpClient.get(`starships`);
  return res.data.results.map(transformStarship);
}; */

export const getStarship = async (id) => {
  const starship = await httpClient.get(`/starships/${id}/`);
  return transformStarship(starship.data);
};

export const getStarshipPilots = async (pilots) => {
  let requests = await pilots.map((pilot) => httpClient.get(pilot));
  let starshipPilotsData = await Promise.all(requests).then(
    (response) => response
  );
  return starshipPilotsData.map((pilot) => transformStarshipPilots(pilot));
};

const transformStarshipPilots = (pilot) => {
  const { data } = pilot;
  return {
    id: extractId(data),
    name: data.name,
  };
};

const transformStarship = (starship) => {
  return {
    id: extractId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    starshipClass: starship.starship_class,
    costInCredits: starship.cost_in_credits,
    length: starship.length,
    maxSpeed: starship.max_atmosphering_speed,
    hyperdriveRating: starship.hyperdrive_rating,
    passengers: starship.passengers,
    pilots: starship.pilots,
  };
};
