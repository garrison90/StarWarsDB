import React from "react";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { routes } from "../../constansts/routes";
import { selectResidents } from "../../store/selectors/planets";

function PlanetResidents() {
  const residents = useSelector(selectResidents);
  const history = useHistory();
  const { PERSON_DETAILS } = routes;

  const reallocate = (id) => {
    history.push(PERSON_DETAILS.createPath(id));
  };

  return (
    <>
      {residents.map((resident) => (
        <ListGroup.Item
          key={resident.id}
          onClick={() => reallocate(resident.id)}
        >
          {resident.name}
        </ListGroup.Item>
      ))}
    </>
  );
}

export default PlanetResidents;
