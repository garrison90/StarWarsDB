import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { StarshipPilots } from "../StarshipPilots/StarshipPilots";
import { useRouteMatch } from "react-router-dom";
import { routes } from "../../constansts/routes";
import { PersonStarships } from "../PersonStarshipsAndPlanet/PersonStarships";
import { PersonPlanet } from "../PersonStarshipsAndPlanet/PersonPlanet";
import { PlanetResidents } from "../PlanetResidents/PlanetResidents";

export const ItemDetails = ({ item, fields, labels, loading, error }) => {
  const { path } = useRouteMatch();
  const { STARSHIP_DETAILS, PERSON_DETAILS, PLANET_DETAILS } = routes;

  if (loading) return loading;
  if (error) return error;

  return (
    <Container>
      <h2 className="text-center m-4">{item.name}</h2>
      <Row>
        <Col>
          {labels.slice(1).map((label, i) => (
            <ListGroup.Item key={i} variant="secondary" className="text-center">
              {label}:
            </ListGroup.Item>
          ))}
        </Col>
        <Col>
          {fields.slice(1).map((field, i) => (
            <ListGroup.Item key={i} variant="primary" className="text-center">
              {item[field]}
            </ListGroup.Item>
          ))}
        </Col>
      </Row>
      {path === STARSHIP_DETAILS.INDEX ? <StarshipPilots /> : null}
      {path === PERSON_DETAILS.INDEX ? (
        <>
          <PersonStarships />
          <PersonPlanet />
        </>
      ) : null}
      {path === PLANET_DETAILS.INDEX ? <PlanetResidents /> : null}
    </Container>
  );
};
