import React from "react";
import icon from "../../assets/death-star.png";
import "./SearchFailure.css";

const SearchFailure = () => {
  return (
    <div>
      <div className="failure-indicator">
        <img src={icon} alt="failure-icon" />
        <span className="boom">BOOM!</span>
        <span>Sorry, your search did not match any starships.</span>
        <span>Please, try once more.</span>
      </div>
    </div>
  );
};

export default SearchFailure;
