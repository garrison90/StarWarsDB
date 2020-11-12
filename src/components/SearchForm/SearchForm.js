import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
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
