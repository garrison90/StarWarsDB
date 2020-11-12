import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { routes } from "../../constansts/routes";

function Header() {
  const { HOME, STARSHIPS, PLANETS, PEOPLE } = routes;

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to={HOME.INDEX}>
        StarWarsDB
      </Navbar.Brand>
      <Nav className="ml-4">
        <Nav.Link as={NavLink} to={STARSHIPS.INDEX}>
          StarShips
        </Nav.Link>
        <Nav.Link as={NavLink} to={PLANETS.INDEX}>
          Planets
        </Nav.Link>
        <Nav.Link as={NavLink} to={PEOPLE.INDEX}>
          People
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
