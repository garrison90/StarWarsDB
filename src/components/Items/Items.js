import React from "react";
import "./Items.css";

export const Items = ({
  fields,
  labels,
  items,
  move,
  lastStarshipElementRef,
  loading,
  error,
}) => {
  return (
    <>
      <ul>
        {items.map((item, index) => {
          if (items.length === index + 1) {
            return (
              <li
                id="item"
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
              <li id="item" key={item.id} onClick={() => move(item.id)}>
                <span>{labels[0]}: </span> {item[fields[0]]}
                <br />
                <span>{labels[1]}: </span>
                {item[fields[1]]}
              </li>
            );
          }
        })}
      </ul>

      <div>{loading}</div>
      <div>{error}</div>
    </>
  );
};
