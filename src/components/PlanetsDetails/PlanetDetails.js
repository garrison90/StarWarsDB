import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlanetDataRequest } from "../../store/actions/planets";
import planetDetailsSaga from "../../store/sagas/planetDetailsSaga";
import { useInjectSaga } from "../../store/sagas/useInjectSaga";
import { selectPlanet } from "../../store/selectors/planets";
import PlanetResidents from "../PlanetResidents/PlanetResidents";

function PlanetDetails() {
  useInjectSaga("planetDetailsSaga", planetDetailsSaga);
  const dispatch = useDispatch();
  const planet = useSelector(selectPlanet);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPlanetDataRequest(id));
  }, [dispatch, id]);

  return (
    <ListGroup>
      <ListGroup.Item>Name:{planet.name}</ListGroup.Item>
      <ListGroup.Item>Climate: {planet.climate}</ListGroup.Item>
      <ListGroup.Item>Population: {planet.population}</ListGroup.Item>
      <ListGroup.Item>Rotation Period: {planet.rotationPeriod}</ListGroup.Item>
      <ListGroup.Item>Diameter: {planet.diameter}</ListGroup.Item>
      <h1>Planet Residents :</h1>
      <PlanetResidents />
    </ListGroup>
  );
}

export default PlanetDetails;
