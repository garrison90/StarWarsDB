import React from "react";
import icon from "../../assets/death-star.png";
import "./ErrorComponent.css";

const ErrorComponent = () => {
  return (
    <div>
      <div className="error-indicator">
        <img src={icon} alt="error-icon" />
        <span className="boom">BOOM!</span>
        <span>Something has gone terribly wrong</span>
        <span>(but we already sent droids to fix it)</span>
      </div>
    </div>
  );
};

export default ErrorComponent;
