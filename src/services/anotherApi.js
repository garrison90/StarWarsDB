import axios from "axios";
import { transformStarship } from "../helpers/helpers";

/* export let cancel; */

export const getAnotherStarships = ([query, pageNumber]) => {
  return axios({
    method: "GET",
    baseURL: "https://swapi.dev/api/starships",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    params: { search: query, page: pageNumber },
    //cancelToken: new axios.CancelToken((c) => (cancel = c)),
  });
  /* .then((res) => {
      const { results, next } = res.data;
      let starships = results.map(transformStarship);
      return {
        starships,
        next,
      };
    })
    .catch((e) => {
      if (axios.isCancel(e)) return;
    }); */
};
