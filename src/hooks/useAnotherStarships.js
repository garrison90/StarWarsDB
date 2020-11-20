import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnotherStarshipsRequest } from "../store/reducers/anotherStarshipsSlice";
import anotherStarshipsSaga from "../store/sagas/anotherStarshipsSaga";
import {
  selectError,
  selectHasMore,
  selectLoading,
  selectStarships,
} from "../store/selectors/anotherStarships";
import { useInjectSaga } from "../store/sagas/useInjectSaga";
import { cancel } from "redux-saga/effects";

function useAnotherStarships(query, pageNumber) {
  useInjectSaga("anotherSaga", anotherStarshipsSaga);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const starships = useSelector(selectStarships);
  const hasMore = useSelector(selectHasMore);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect");
    dispatch(getAnotherStarshipsRequest({ query, pageNumber }));
    //return () => cancel();
  }, [dispatch, query, pageNumber]);

  return useMemo(() => ({ starships, hasMore, loading, error }), [
    starships,
    hasMore,
    loading,
    error,
  ]);
}

export default useAnotherStarships;

/* import { useEffect, useState } from "react";
import axios from "axios";

function useAnotherStarship(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [starships, setStarhips] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setStarhips([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://swapi.dev/api/starships",
      params: { search: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setStarhips((prevStarships) => {
          return [
            ...new Set([
              ...prevStarships,
              ...res.data.results.map((b) => b.name),
            ]),
          ];
        });
        setHasMore(
          res.data.next !== null
          //res.data.docs.length > 0
        );
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();
  }, [query, pageNumber]);

  return { starships, hasMore, loading, error };
}

export default useAnotherStarship; */
