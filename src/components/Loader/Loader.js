import React from "react";
import threeDots from "../../assets/three-dots.svg";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader">
      <img src={threeDots} alt="loader" />
    </div>
  );
};
