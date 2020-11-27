import React from "react";
import "../../styles/details.css";

function StarshipDetails({ starship, loading, move, pilots, error }) {
  if (loading) return loading;
  if (error) return error;
  return (
    <div className="wrapper">
      <div className="first-block">
        <h2>{starship.name}</h2>
        <ul>
          <li>
            <span>Model: </span>
            {starship.model}
          </li>
          <li>
            <span>Manufacturer:</span>
            {starship.manufacturer}
          </li>
          <li>
            <span>Length:</span> {starship.length}
          </li>
          <li>
            <span>Cost in credits:</span>
            {starship.costInCredits}
          </li>
          <li>
            <span> Max Atmosphering Speed: </span>
            {starship.maxSpeed}
          </li>
          <li>
            <span>Passengers:</span> {starship.passengers}
          </li>
          <li>
            <span>Starship Class:</span>
            {starship.starshipClass}
          </li>
        </ul>
      </div>
      <div className="second-block">
        <h2>Pilots</h2>
        <ul>
          {pilots.length ? (
            pilots.map((pilot) => (
              <li key={pilot.id} onClick={() => move(pilot.id)}>
                {pilot.name}
              </li>
            ))
          ) : (
            <p>This starship doesn't have any pilot!</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default StarshipDetails;
