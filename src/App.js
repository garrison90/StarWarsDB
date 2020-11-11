//import "./App.css";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Starships from "./components/Starships/Starships";
import Planets from "./components/Planets/Planets";
import People from "./components/People/People";
import Home from "./components/Home/Home";
import StarshipsDetails from "./components/StarshipsDetails/StarshipDetails";
import PlanetDetails from "./components/PlanetsDetails/PlanetDetails";
import PersonDetails from "./components/PersonDetails/PersonDetails";
import { routes } from "./constansts/routes";

function App() {
  const {
    HOME,
    STARSHIPS,
    STARSHIPS_DETAILS,
    PEOPLE,
    PERSON_DETAILS,
    PLANETS,
    PLANETS_DETAILS,
  } = routes;

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={HOME.INDEX} component={Home} />
        <Route exact path={STARSHIPS.INDEX} component={Starships} />
        <Route path={STARSHIPS_DETAILS.INDEX} component={StarshipsDetails} />
        <Route exact path={PEOPLE.INDEX} component={People} />
        <Route path={PERSON_DETAILS.INDEX} component={PersonDetails} />
        <Route exact path={PLANETS.INDEX} component={Planets} />
        <Route path={PLANETS_DETAILS.INDEX} component={PlanetDetails} />
        <Route path="*">
          <Redirect to={HOME.INDEX} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
