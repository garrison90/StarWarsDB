import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../store/reducers/itemsSlice";
import { selectQuery } from "../../store/selectors/items";
import "./SearchForm.css";

export const SearchForm = () => {
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
