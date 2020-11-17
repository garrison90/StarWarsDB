import React from "react";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { routes } from "../../constansts/routes";
import useSwitchTo from "../../hooks/useSwitchTo";
import { selectResidents } from "../../store/selectors/planets";

function PlanetResidents() {
  const residents = useSelector(selectResidents);
  const moveTo = useSwitchTo();
  const { PERSON_DETAILS } = routes;

  const move = (id) => {
    const path = PERSON_DETAILS.createPath(id);
    moveTo(path);
  };

  return (
    <>
      {residents.map((resident) => (
        <ListGroup.Item key={resident.id} onClick={() => move(resident.id)}>
          {resident.name}
        </ListGroup.Item>
      ))}
    </>
  );
}

export default PlanetResidents;
