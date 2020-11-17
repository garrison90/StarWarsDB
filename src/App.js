import Header from "./components/Header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./constansts/routes";
import { lazy, Suspense } from "react";

const PersonDetails = lazy(() =>
  import("./components/PersonDetails/PersonDetails")
);

const PeopleContainer = lazy(() => import("./containers/PeopleContainer"));
const PlanetDetails = lazy(() =>
  import("./components/PlanetsDetails/PlanetDetails")
);
const Starships = lazy(() => import("./components/Starships/Starships"));
const StarshipDetails = lazy(() =>
  import("./components/StarshipsDetails/StarshipDetails")
);
const Planets = lazy(() => import("./components/Planets/Planets"));
const Home = lazy(() => import("./components/Home/Home"));
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
      <Suspense fallback={null}>
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
      </Suspense>
    </>
  );
}

export default App;
