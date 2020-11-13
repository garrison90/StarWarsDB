import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchInputValue } from "../../store/actions/starships";

function SearchForm() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(getSearchInputValue(value));
    setValue("");
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e)}
        placeholder="Search"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
