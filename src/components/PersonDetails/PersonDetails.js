import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { routes } from "../../constansts/routes";

function PersonDetails({ loading, starships, homeworld, error, person, move }) {
  const { PLANET_DETAILS, STARSHIP_DETAILS } = routes;
  if (loading) return loading;
  if (error) return error;

  return (
    <ListGroup>
      <ListGroup.Item> Name:{person.name} </ListGroup.Item>
      <ListGroup.Item>Gender: {person.gender}</ListGroup.Item>
      <ListGroup.Item>BirthYear: {person.birthYear}</ListGroup.Item>
      <ListGroup.Item>Eye Color: {person.eyeColor}</ListGroup.Item>
      <ListGroup.Item
        onClick={() => move(PLANET_DETAILS.createPath(homeworld.id))}
      >
        Homeworld: {homeworld.name}
      </ListGroup.Item>
      <h3>Starships: </h3>
      {starships.map((starship) => (
        <ListGroup.Item
          key={starship.id}
          onClick={() => move(STARSHIP_DETAILS.createPath(starship.id))}
        >
          Starship: {starship.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default PersonDetails;
