import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { routes } from "../../constansts/routes";
/* import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
 */
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
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form> */}
    </Navbar>
  );
}

export default Header;
