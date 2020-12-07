import React from "react";
import { useSelector } from "react-redux";
import { selectStarshipPilots } from "../../store/selectors/starship";
import useSwitchTo from "../../hooks/useSwitchTo";
import { routes } from "../../constansts/routes";
import Col from "react-bootstrap/esm/Col";
import ListGroup from "react-bootstrap/esm/ListGroup";
import Row from "react-bootstrap/esm/Row";

export const StarshipPilots = () => {
  const pilots = useSelector(selectStarshipPilots);
  const move = useSwitchTo();
  const { PERSON_DETAILS } = routes;

  return (
    <>
      <h4 className="text-center m-4">Starship Pilots: </h4>
      <Row>
        <Col>
          {pilots && pilots.length ? (
            pilots.map((pilot, i) => (
              <ListGroup.Item
                action
                className="text-center"
                variant="light"
                key={i}
                onClick={() => move(PERSON_DETAILS.createPath(pilot.id))}
              >
                {pilot.name}
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item className="text-center" variant="warning">
              This starship doesn't have pilots!
            </ListGroup.Item>
          )}
        </Col>
      </Row>
    </>
  );
};
