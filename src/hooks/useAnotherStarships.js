import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearStarships,
  getAnotherStarshipsRequest,
} from "../toDelete/anotherStarshipsSlice";
import {
  selectError,
  selectHasMore,
  selectLoading,
  selectStarships,
} from "../toDelete/anotherStarships";

function useAnotherStarships(query, pageNumber) {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const starships = useSelector(selectStarships);
  const hasMore = useSelector(selectHasMore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnotherStarshipsRequest({ query, pageNumber }));
  }, [dispatch, query, pageNumber]);

  useEffect(() => {
    return () => dispatch(clearStarships());
  }, [dispatch]);

  return useMemo(() => ({ starships, hasMore, loading, error }), [
    starships,
    hasMore,
    loading,
    error,
  ]);
}

export default useAnotherStarships;
