import React from "react";
import { routes } from "../../constansts/routes";
import "../../styles/details.css";

function PersonDetails({ loading, starships, homeworld, error, person, move }) {
  const { PLANET_DETAILS, STARSHIP_DETAILS } = routes;
  if (loading) return loading;
  if (error) return error;

  return (
    <div className="wrapper">
      <div className="first-block">
        <h2>{person.name}</h2>
        <ul>
          <li>
            <span>Gender: </span> Gender: {person.gender}
          </li>
          <li>
            <span>BirthYear: </span>
            {person.birthYear}
          </li>
          <li>
            <span>Eye Color: </span> {person.eyeColor}
          </li>
          <li>
            <span>Height: </span>
            {person.height}
          </li>
          <li>
            <span>Mass: </span> {person.mass}
          </li>
          <li>
            <span>Skin Color: </span>
            {person.skinColor}
          </li>
          <li>
            <span>Hair color: </span>
            {person.hairColor}
          </li>
        </ul>
      </div>
      <div className="second-block">
        <div>
          <h2>Starships</h2>
          <ul>
            {starships.length ? (
              starships.map((starship) => (
                <li
                  key={starship.id}
                  onClick={() => move(STARSHIP_DETAILS.createPath(starship.id))}
                >
                  {starship.name}
                </li>
              ))
            ) : (
              <p>This person doesn't have any starship!</p>
            )}
          </ul>
        </div>
        <div className="planet-item">
          <h2>HomeWorld</h2>
          <li onClick={() => move(PLANET_DETAILS.createPath(homeworld.id))}>
            Planet {homeworld.name}
          </li>
        </div>
      </div>
    </div>
  );
}

export default PersonDetails;
