import Header from "./components/Header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./constansts/routes";
import { lazy, Suspense } from "react";

const PersonDetailsContainer = lazy(() =>
  import("./containers/PersonDetailsContainer")
);

const PeopleContainer = lazy(() => import("./containers/PeopleContainer"));
const PlanetDetailsContainer = lazy(() =>
  import("./containers/PlanetDetailsContainer")
);
const StarshipsContainer = lazy(() =>
  import("./containers/StarshipsContainer")
);
const StarshipDetailsContainer = lazy(() =>
  import("./containers/StarshipsDetailsContainer")
);
const PlanetsContainer = lazy(() => import("./containers/PlanetsContainer"));
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
          <Route exact path={STARSHIPS.INDEX} component={StarshipsContainer} />
          <Route
            path={STARSHIP_DETAILS.INDEX}
            component={StarshipDetailsContainer}
          />
          <Route exact path={PEOPLE.INDEX} component={PeopleContainer} />
          <Route
            path={PERSON_DETAILS.INDEX}
            component={PersonDetailsContainer}
          />
          <Route exact path={PLANETS.INDEX} component={PlanetsContainer} />
          <Route
            path={PLANET_DETAILS.INDEX}
            component={PlanetDetailsContainer}
          />
          <Redirect path="*" to={HOME.INDEX} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
