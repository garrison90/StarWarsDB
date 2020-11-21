import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import DropdownButton from "react-bootstrap/esm/DropdownButton";
import InputGroupWithExtras from "react-bootstrap/esm/InputGroup";
import Dropdown from "react-bootstrap/esm/Dropdown";

function StarshipDetails({ starship, loading, move, pilots, error }) {
  if (loading) return loading;
  if (error) return error;
  return (
    <>
      <ListGroup>
        <ListGroup.Item>Name:{starship.name}</ListGroup.Item>
        <ListGroup.Item>Model:{starship.model}</ListGroup.Item>
        <ListGroup.Item>Manufacturer:{starship.manufacturer}</ListGroup.Item>
        <ListGroup.Item>
          Cost in credits: {starship.costInCredits}
        </ListGroup.Item>
        <ListGroup.Item>Length: {starship.length}</ListGroup.Item>
        <ListGroup.Item>
          Max Atmosphering Speed: {starship.maxSpeed}
        </ListGroup.Item>
        <ListGroup.Item>Passengers: {starship.passengers}</ListGroup.Item>
        <ListGroup.Item>
          Hyperdrive Rating: {starship.hyperdriveRating}
        </ListGroup.Item>
        <ListGroup.Item>
          Starship Class: {starship.starshipClass}
        </ListGroup.Item>
      </ListGroup>
      <h1>Pilots:</h1>
      <DropdownButton
        as={InputGroupWithExtras.Prepend}
        variant="outline-secondary"
        title={!pilots.length ? "This spaship doesn't have pilots" : "Pilots"}
        id="input-group-dropdown-1"
        className="w-25"
      >
        {pilots.length
          ? pilots.map((pilot) => (
              <Dropdown.Item key={pilot.id} onClick={() => move(pilot.id)}>
                {pilot.name}
              </Dropdown.Item>
            ))
          : null}
      </DropdownButton>
    </>
  );
}

export default StarshipDetails;
