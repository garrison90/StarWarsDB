import React from "react";
import Col from "react-bootstrap/esm/Col";
import ListGroup from "react-bootstrap/esm/ListGroup";
import Row from "react-bootstrap/esm/Row";
import { selectPlanetResidents } from "../../store/selectors/planets";
import useSwitchTo from "../../hooks/useSwitchTo";
import { useSelector } from "react-redux";
import { routes } from "../../constansts/routes";

export const PlanetResidents = () => {
  const residents = useSelector(selectPlanetResidents);
  const move = useSwitchTo();
  const { PERSON_DETAILS } = routes;

  return (
    <>
      <h4 className="text-center m-4">Planet Residents: </h4>
      <Row>
        <Col>
          {residents && residents.length ? (
            residents.map((resident, i) => (
              <ListGroup.Item
                action
                className="text-center"
                variant="light"
                key={i}
                onClick={() => move(PERSON_DETAILS.createPath(resident.id))}
              >
                {resident.name}
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item className="text-center" variant="warning">
              This planet doesn't have any residents!
            </ListGroup.Item>
          )}
        </Col>
      </Row>
    </>
  );
};
