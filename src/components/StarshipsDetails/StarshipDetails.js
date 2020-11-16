import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useInjectSaga } from "../../store/sagas/useInjectSaga";
import starshipDetailsSaga from "../../store/sagas/starshipDetailsSaga";
import { useDispatch, useSelector } from "react-redux";
import { selectStarship } from "../../store/selectors/starships";
import { useParams } from "react-router-dom";
import StarshipPilots from "../StarshipPilots/StarshipPilots";
import { getStarshipDetailsRequest } from "../../store/reducers/starshipsSlice";

function StarshipDetails() {
  useInjectSaga("starshipDetailsSaga", starshipDetailsSaga);
  const dispatch = useDispatch();
  const starship = useSelector(selectStarship);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getStarshipDetailsRequest(id));
  }, [dispatch, id]);

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
      <StarshipPilots />
    </>
  );
}

export default StarshipDetails;
