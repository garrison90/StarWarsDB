import React, { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAnotherStarships from "../../hooks/useAnotherStarships";
import {
  setPageNumber,
  setQuery,
} from "../../store/reducers/anotherStarshipsSlice";
import {
  selectPage,
  selectQuery,
} from "../../store/selectors/anotherStarships";
import "./Home.css";

function Home() {
  const query = useSelector(selectQuery);
  const pageNumber = useSelector(selectPage);
  const dispatch = useDispatch();

  const { starships, hasMore, loading, error } = useAnotherStarships(
    query,
    pageNumber
  );

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("visible");
          dispatch(setPageNumber(pageNumber + 1));
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, pageNumber, dispatch]
  );

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
    //dispatch(setPageNumber(1));
  };

  return (
    <>
      <input type="text" value={query} onChange={handleChange} />
      <ul>
        {starships.map((starship, index) => {
          if (starships.length === index + 1) {
            return (
              <li ref={lastBookElementRef} key={starship.id}>
                {starship.name}
                <br />
                <span>Model : </span>
                {starship.model}
              </li>
            );
          } else {
            return (
              <li key={starship.id}>
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

export default Home;

/* import React, { useCallback, useRef, useState } from "react";
import useAnotherStarship from "../../hooks/useAnotherStarships";
import "./Home.css";

function Home() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { starships, hasMore, loading, error } = useAnotherStarship(
    query,
    pageNumber
  );

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("visible");
          setPageNumber((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <>
      <input type="text" value={query} onChange={handleChange} />
      <ul>
        {starships.map((starship, index) => {
          if (starships.length === index + 1) {
            return (
              <li ref={lastBookElementRef} key={starship}>
                {starship}
                <br />
                <span>Model : </span>
                {starship}
              </li>
            );
          } else {
            return (
              <li key={starship}>
                {starship}
                <br />
                <span>Model : </span>
                {starship}
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

export default Home;
 */
