import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearStarships,
  getStarshipsRequest,
} from "../store/reducers/starshipsSlice";
import {
  selectError,
  selectHasMore,
  selectLoading,
  selectStarships,
} from "../store/selectors/starships";

function useAnotherStarships(query, pageNumber) {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const starships = useSelector(selectStarships);
  const hasMore = useSelector(selectHasMore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStarshipsRequest({ query, pageNumber }));
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
