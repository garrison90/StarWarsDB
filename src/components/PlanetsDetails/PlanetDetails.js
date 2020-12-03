import React from "react";
import "../../styles/details.css";

function PlanetDetails({ planet, error, loading, residents, move }) {
  if (loading) return loading;
  if (error) return error;
  return (
    <div className="wrapper">
      <div className="first-block">
        <h2>{planet.name}</h2>
        <ul>
          <li>
            <span>Climate: </span> {planet.climate}
          </li>
          <li>
            <span>Population:</span> {planet.population}
          </li>
          <li>
            <span>Rotation Period:</span> {planet.rotationPeriod}
          </li>
          <li>
            <span>Diameter:</span> {planet.diameter}
          </li>
          <li>
            <span>gravity:</span> {planet.gravity}
          </li>
          <li>
            <span>terrain:</span> {planet.terrain}
          </li>
          <li>
            <span>surface water:</span> {planet.surfaceWater}
          </li>
        </ul>
      </div>
      {!loading && (
        <div className="second-block">
          <h2>Residents</h2>
          <ul>
            {residents.length ? (
              residents.map((resident) => (
                <li
                  key={resident.id}
                  data-testid="resident-item"
                  onClick={() => move(resident.id)}
                >
                  {resident.name}
                </li>
              ))
            ) : (
              <p>This planet doesn't have any resident!</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PlanetDetails;
