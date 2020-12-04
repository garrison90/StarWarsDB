import React from "react";
import Col from "react-bootstrap/esm/Col";
import ListGroup from "react-bootstrap/esm/ListGroup";
import Row from "react-bootstrap/esm/Row";
import { useSelector } from "react-redux";
import useSwitchTo from "../../hooks/useSwitchTo";
import { routes } from "../../constansts/routes";
import { selectPersonPlanet } from "../../store/selectors/people";

export const PersonPlanet = () => {
  const planet = useSelector(selectPersonPlanet);
  const move = useSwitchTo();
  const { PLANET_DETAILS } = routes;

  return (
    <>
      {planet && (
        <>
          <h4 className="text-center m-4">Person Homeworld: </h4>
          <Row>
            <Col>
              <ListGroup.Item
                action
                className="text-center"
                variant="light"
                key={planet.id}
                onClick={() => move(PLANET_DETAILS.createPath(planet.id))}
              >
                {planet.name}
              </ListGroup.Item>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
