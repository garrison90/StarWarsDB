import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPersonDetailsRequest } from "../../store/actions/people";
import personDetailsSaga from "../../store/sagas/personDetailsSaga";
import { useInjectSaga } from "../../store/sagas/useInjectSaga";
import { selectPerson } from "../../store/selectors/people";

function PersonDetails() {
  useInjectSaga("personDetailsSaga", personDetailsSaga);
  const dispatch = useDispatch();
  const person = useSelector(selectPerson);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPersonDetailsRequest(id));
  }, [dispatch, id]);

  return (
    <ListGroup>
      <ListGroup.Item>Name:{person.name}</ListGroup.Item>
      <ListGroup.Item>Gender: {person.gender}</ListGroup.Item>
      <ListGroup.Item>BirthYear: {person.birthYear}</ListGroup.Item>
      <ListGroup.Item>Eye Color: {person.eyeColor}</ListGroup.Item>
      <ListGroup.Item>Homeworld: {person.homeworld}</ListGroup.Item>
      <ListGroup.Item>Starships: {person.starships}</ListGroup.Item>
    </ListGroup>
  );
}

export default PersonDetails;
