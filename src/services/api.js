import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});
