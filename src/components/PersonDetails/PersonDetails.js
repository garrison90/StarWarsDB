import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { routes } from "../../constansts/routes";
import { getPersonDataRequest } from "../../store/reducers/peopleSlice";
import personDetailsSaga from "../../store/sagas/personDetailsSaga";
import { useInjectSaga } from "../../store/sagas/useInjectSaga";
import {
  selectPerson,
  selectPersonHomeworld,
  selectPersonStarships,
} from "../../store/selectors/people";

function PersonDetails() {
  useInjectSaga("personDetailsSaga", personDetailsSaga);
  const dispatch = useDispatch();
  const person = useSelector(selectPerson);
  const homeworld = useSelector(selectPersonHomeworld);
  const starships = useSelector(selectPersonStarships);
  const history = useHistory();
  const { id } = useParams();
  const { PLANET_DETAILS, STARSHIPS_DETAILS } = routes;

  useEffect(() => {
    dispatch(getPersonDataRequest(id));
  }, [dispatch, id]);

  const redirectTo = (id) => {
    history.push(PLANET_DETAILS.createPath(id));
  };

  const redirectToStarship = (id) => {
    history.push(STARSHIPS_DETAILS.createPath(id));
  };

  return (
    <ListGroup>
      <ListGroup.Item> Name:{person.name} </ListGroup.Item>
      <ListGroup.Item>Gender: {person.gender}</ListGroup.Item>
      <ListGroup.Item>BirthYear: {person.birthYear}</ListGroup.Item>
      <ListGroup.Item>Eye Color: {person.eyeColor}</ListGroup.Item>
      <ListGroup.Item onClick={() => redirectTo(homeworld.id)}>
        Homeworld: {homeworld.name}
      </ListGroup.Item>
      <h3>Starships: </h3>
      {starships.map((starship) => (
        <ListGroup.Item
          key={starship.id}
          onClick={() => redirectToStarship(starship.id)}
        >
          Starship: {starship.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default PersonDetails;
