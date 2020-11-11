import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";

function StarshipPilots() {
  return (
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Pilots"
      id="input-group-dropdown-1"
      className="w-25"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
    </DropdownButton>
  );
}

export default StarshipPilots;
