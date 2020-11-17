import React from "react";
import preloader from "../../assets/rings.svg";
import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <img src={preloader} alt="preloader" />
    </div>
  );
}

export default Preloader;
