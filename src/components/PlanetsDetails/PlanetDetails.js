import React from "react";
import ListGroup from "react-bootstrap/esm/ListGroup";

function PlanetDetails({ planet, error, loading, residents, move }) {
  if (loading) return loading;
  if (error) return error;

  return (
    <ListGroup>
      <ListGroup.Item>Name:{planet.name}</ListGroup.Item>
      <ListGroup.Item>Climate: {planet.climate}</ListGroup.Item>
      <ListGroup.Item>Population: {planet.population}</ListGroup.Item>
      <ListGroup.Item>Rotation Period: {planet.rotationPeriod}</ListGroup.Item>
      <ListGroup.Item>Diameter: {planet.diameter}</ListGroup.Item>
      <h1>Planet Residents :</h1>
      {residents.map((resident) => (
        <ListGroup.Item key={resident.id} onClick={() => move(resident.id)}>
          {resident.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default PlanetDetails;
