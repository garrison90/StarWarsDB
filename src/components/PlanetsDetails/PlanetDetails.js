import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlanetDataRequest } from "../../store/reducers/planetsReducer";
import planetDetailsSaga from "../../store/sagas/planetDetailsSaga";
import { useInjectSaga } from "../../store/sagas/useInjectSaga";
import { selectPlanet } from "../../store/selectors/planets";

function PlanetDetails() {
  useInjectSaga('planetDetailsSaga', planetDetailsSaga)
  const dispatch = useDispatch();
  const planet = useSelector(selectPlanet);
  const {id} = useParams();
  console.log(planet);

  useEffect(()=>{
    dispatch(getPlanetDataRequest(id))
  }, [dispatch, id])


  return <ListGroup>
  <ListGroup.Item>Name:{planet.name}</ListGroup.Item>
  <ListGroup.Item>Gender: {planet.climate}</ListGroup.Item>
  <ListGroup.Item>BirthYear: {planet.population}</ListGroup.Item>
  <ListGroup.Item>Eye Color: {planet.rotationPeriod}</ListGroup.Item>
  <ListGroup.Item>Homeworld: {planet.diameter}</ListGroup.Item>
  <ListGroup.Item>Starships: {planet.residents}</ListGroup.Item>
</ListGroup>

}

export default PlanetDetails;
