import React from "react";
import Loader from "../Loader/Loader";
import "./Items.css";

export const Items = ({
  fields,
  labels,
  query,
  handleChange,
  items,
  move,
  lastStarshipElementRef,
  loading,
  error,
}) => {
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
        {items.map((item, index) => {
          if (items.length === index + 1) {
            return (
              <li
                id="starship"
                ref={lastStarshipElementRef}
                key={item.id}
                onClick={() => move(item.id)}
              >
                <span>{labels[0]}: </span> {item[fields[0]]}
                <br />
                <span>{labels[1]}: </span>
                {item[fields[1]]}
              </li>
            );
          } else {
            return (
              <li id="starship" key={item.id} onClick={() => move(item.id)}>
                <span>{labels[0]}: </span> {item[fields[0]]}
                <br />
                <span>{labels[1]}: </span>
                {item[fields[1]]}
              </li>
            );
          }
        })}
      </ul>
      <div>{loading && <Loader />}</div>
    </>
  );
};
