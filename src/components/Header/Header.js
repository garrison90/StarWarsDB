import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { routes } from "constansts/routes";
import { clearItems } from "store/reducers/itemsSlice";

function Header() {
  const { HOME, STARSHIPS, PLANETS, PEOPLE } = routes;
  const dispatch = useDispatch();

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand
        as={NavLink}
        to={HOME.INDEX}
        onClick={() => dispatch(clearItems())}
      >
        StarWarsDB
      </Navbar.Brand>
      <Nav className="ml-4">
        <Nav.Link
          as={NavLink}
          to={STARSHIPS.INDEX}
          onClick={() => dispatch(clearItems())}
        >
          StarShips
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to={PLANETS.INDEX}
          onClick={() => dispatch(clearItems())}
        >
          Planets
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to={PEOPLE.INDEX}
          onClick={() => dispatch(clearItems())}
        >
          People
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
