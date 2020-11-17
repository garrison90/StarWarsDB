import Header from "./components/Header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./constansts/routes";
import PlanetDetails from "./components/PlanetsDetails/PlanetDetails";
import PersonDetails from "./components/PersonDetails/PersonDetails";
import StarshipDetails from "./components/StarshipsDetails/StarshipDetails";
import Starships from "./components/Starships/Starships";
import Planets from "./components/Planets/Planets";
import Home from "./components/Home/Home";
import PeopleContainer from "./containers/PeopleContainer";

function App() {
  const {
    HOME,
    STARSHIPS,
    STARSHIP_DETAILS,
    PEOPLE,
    PERSON_DETAILS,
    PLANETS,
    PLANET_DETAILS,
  } = routes;

  return (
    <>
      <Header />
      <Switch>
        <Route exact path={HOME.INDEX} component={Home} />
        <Route exact path={STARSHIPS.INDEX} component={Starships} />
        <Route path={STARSHIP_DETAILS.INDEX} component={StarshipDetails} />
        <Route exact path={PEOPLE.INDEX} component={PeopleContainer} />
        <Route path={PERSON_DETAILS.INDEX} component={PersonDetails} />
        <Route exact path={PLANETS.INDEX} component={Planets} />
        <Route path={PLANET_DETAILS.INDEX} component={PlanetDetails} />
        <Redirect path="*" to={HOME.INDEX} />
      </Switch>
    </>
  );
}

export default App;
