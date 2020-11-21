import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Starships from "../components/Starships/Starships";
import { routes } from "../constansts/routes";
import useLoading from "../hooks/useLoading";
import useSwitchTo from "../hooks/useSwitchTo";
import useError from "../hooks/useError";
import {
  clearStarships,
  getStarshipsRequest,
  setPageNumber,
  setQuery,
} from "../store/reducers/starshipsSlice";
import {
  selectStarshipsError,
  selectHasMore,
  selectStarshipsLoading,
  selectPage,
  selectQuery,
  selectStarships,
} from "../store/selectors/starships";

function StarshipsContainer() {
  const loading = useLoading(selectStarshipsLoading);
  const error = useError(selectStarshipsError);
  const starships = useSelector(selectStarships);
  const hasMore = useSelector(selectHasMore);
  const query = useSelector(selectQuery);
  const pageNumber = useSelector(selectPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStarshipsRequest());
  }, [dispatch, query, pageNumber]);

  useEffect(() => {
    return () => dispatch(clearStarships());
  }, [dispatch]);

  const moveTo = useSwitchTo();
  const { STARSHIP_DETAILS } = routes;

  const observer = useRef();
  const lastStarshipElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch(setPageNumber());
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, dispatch]
  );

  const move = (id) => {
    const path = STARSHIP_DETAILS.createPath(id);
    moveTo(path);
  };

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  return (
    <Starships
      starships={starships}
      move={move}
      handleChange={handleChange}
      lastStarshipElementRef={lastStarshipElementRef}
      loading={loading}
      error={error}
    />
  );
}

export default StarshipsContainer;
