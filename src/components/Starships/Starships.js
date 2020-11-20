import React, { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStarships from "../../hooks/useStarships";
import { setPageNumber, setQuery } from "../../store/reducers/starshipsSlice";
import { selectPage, selectQuery } from "../../store/selectors/starships";
import "./Starships.css";
import useSwitchTo from "../../hooks/useSwitchTo";
import { routes } from "../../constansts/routes";

function Starships() {
  const query = useSelector(selectQuery);
  const pageNumber = useSelector(selectPage);
  const dispatch = useDispatch();
  const { starships, hasMore, loading, error } = useStarships(
    query,
    pageNumber
  );
  const moveTo = useSwitchTo();
  const { STARSHIP_DETAILS } = routes;

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch(setPageNumber(pageNumber + 1));
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, pageNumber, dispatch]
  );

  const move = (id) => {
    const path = STARSHIP_DETAILS.createPath(id);
    moveTo(path);
  };

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  return (
    <>
      <input type="text" value={query} onChange={handleChange} />
      <ul>
        {starships.map((starship, index) => {
          if (starships.length === index + 1) {
            return (
              <li
                ref={lastBookElementRef}
                key={starship.id}
                onClick={() => move(starship.id)}
              >
                {starship.name}
                <br />
                <span>Model : </span>
                {starship.model}
              </li>
            );
          } else {
            return (
              <li key={starship.id} onClick={() => move(starship.id)}>
                {starship.name}
                <br />
                <span>Model : </span>
                {starship.model}
              </li>
            );
          }
        })}
      </ul>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  );
}

export default Starships;
