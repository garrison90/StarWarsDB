import React from "react";
import threeDots from "../../assets/three-dots.svg";
import "./Loader.css";

function Preloader() {
  return (
    <div className="loader">
      <img src={threeDots} alt="loader" />
    </div>
  );
}

export default Preloader;
