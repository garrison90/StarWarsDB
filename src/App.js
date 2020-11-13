//import "./App.css";
import Header from "./components/Header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import Starships from "./components/Starships/Starships";
import Planets from "./components/Planets/Planets";
import Home from "./components/Home/Home";
import StarshipsDetails from "./components/StarshipsDetails/StarshipDetails";
import PlanetDetails from "./components/PlanetsDetails/PlanetDetails";
import PersonDetails from "./components/PersonDetails/PersonDetails";
import { routes } from "./constansts/routes";
import PeopleContainer from "./containers/PeopleContainer";

function App() {
  const {
    HOME,
    STARSHIPS,
    STARSHIPS_DETAILS,
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
        <Route path={STARSHIPS_DETAILS.INDEX} component={StarshipsDetails} />
        <Route exact path={PEOPLE.INDEX} component={PeopleContainer} />
        <Route path={PERSON_DETAILS.INDEX} component={PersonDetails} />
        <Route exact path={PLANETS.INDEX} component={Planets} />
        <Route path={PLANET_DETAILS.INDEX} component={PlanetDetails} />
        <Redirect path="*" to={HOME.INDEX}/>
      </Switch>
    </>
  );
}

export default App;
