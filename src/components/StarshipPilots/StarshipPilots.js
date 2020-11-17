import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { selectStarshipPilots } from "../../store/selectors/starships";
import { routes } from "../../constansts/routes";
import useSwitchTo from "../../hooks/useSwitchTo";

function StarshipPilots() {
  const pilots = useSelector(selectStarshipPilots);
  const moveTo = useSwitchTo();

  const { PERSON_DETAILS } = routes;

  const move = (id) => {
    const path = PERSON_DETAILS.createPath(id);
    moveTo(path);
  };

  return (
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title={!pilots.length ? "This spaship doesn't have pilots" : "Pilots"}
      id="input-group-dropdown-1"
      className="w-25"
    >
      {pilots.length
        ? pilots.map((pilot) => (
            <Dropdown.Item key={pilot.id} onClick={() => move(pilot.id)}>
              {pilot.name}
            </Dropdown.Item>
          ))
        : null}
    </DropdownButton>
  );
}

export default StarshipPilots;
