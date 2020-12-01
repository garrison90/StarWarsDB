import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../store/reducers/itemsSlice";
import { selectQuery } from "../../store/selectors/items";
import Loader from "../Loader/Loader";
import "./Items.css";

const SearchForm = () => {
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  return (
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
  );
};

export const Items = ({
  fields,
  labels,
  items,
  move,
  lastStarshipElementRef,
  loading,
  error,
}) => {
  if (error) return error;

  return (
    <>
      <SearchForm />
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
      <div>{loading && <Loader />}</div>
    </>
  );
};
