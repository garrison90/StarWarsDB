import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import StarshipPilots from "../StarshipPilots/StarshipPilots";
import Preloader from "../Preloader/Preloader";
import useStarshipDetails from "../../hooks/useStarshipDetails";
import { useSelector } from "react-redux";
import { selectStarshipsLoading } from "../../store/selectors/starships";

function StarshipDetails() {
  const starship = useStarshipDetails();
  const loading = useSelector(selectStarshipsLoading);
  if (loading) return <Preloader />;
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
      <StarshipPilots />
    </>
  );
}

export default StarshipDetails;
