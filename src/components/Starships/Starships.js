import React from "react";
import "./Starships.css";
import Loader from "../Loader/Loader";

function Starships({
  query,
  handleChange,
  starships,
  move,
  lastStarshipElementRef,
  loading,
  error,
}) {
  if (error) return error;

  return (
    <>
      <form action="">
        <div className="input-field">
          <input
            type="text"
            id="query"
            value={query}
            required
            onChange={handleChange}
          />
          <label htmlFor="query">Search:</label>
        </div>
      </form>
      <ul>
        {starships.map((starship, index) => {
          if (starships.length === index + 1) {
            return (
              <li
                id="starship"
                ref={lastStarshipElementRef}
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
              <li
                id="starship"
                key={starship.id}
                onClick={() => move(starship.id)}
              >
                {starship.name}
                <br />
                <span>Model : </span>
                {starship.model}
              </li>
            );
          }
        })}
      </ul>
      <div>{loading && <Loader />}</div>
    </>
  );
}

export default Starships;
