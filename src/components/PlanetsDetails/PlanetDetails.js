import React from "react";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { useSelector } from "react-redux";
import usePlanetDetails from "../../hooks/usePlanetDetails";
import { selectLoadingState } from "../../store/selectors/planets";
import PlanetResidents from "../PlanetResidents/PlanetResidents";
import Preloader from "../Preloader/Preloader";

function PlanetDetails() {
  const planet = usePlanetDetails();
  const loading = useSelector(selectLoadingState);

  if (loading) return <Preloader />;

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
