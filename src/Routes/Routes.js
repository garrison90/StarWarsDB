import { routes } from "constansts/routes";
import { Switch, Route, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";
import {
  getAllPeopleRequest,
  getPlanetsDataRequest,
  getStarshipsRequest,
} from "store/reducers/itemsSlice";
import {
  peopleFields,
  peopleLabels,
  planetFields,
  planetLabels,
  starshipsFields,
  starshipsLabels,
} from "helpers/fieldsAndLabelsArrays";

const ItemsContainer = lazy(() => import("containers/ItemsContainer"));

const PersonDetailsContainer = lazy(() =>
  import("containers/PersonDetailsContainer")
);

const PlanetDetailsContainer = lazy(() =>
  import("containers/PlanetDetailsContainer")
);

const StarshipDetailsContainer = lazy(() =>
  import("containers/StarshipDetailsContainer")
);

const Home = lazy(() => import("components/Home/Home"));

export const Routes = () => {
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
    <Suspense fallback={null}>
      <Switch>
        <Route exact path={HOME.INDEX} component={Home} />
        <Route
          exact
          path={STARSHIPS.INDEX}
          render={() => (
            <ItemsContainer
              getData={getStarshipsRequest}
              fields={starshipsFields}
              labels={starshipsLabels}
            />
          )}
        />
        <Route
          path={STARSHIP_DETAILS.INDEX}
          component={StarshipDetailsContainer}
        />
        <Route
          exact
          path={PEOPLE.INDEX}
          render={() => (
            <ItemsContainer
              getData={getAllPeopleRequest}
              fields={peopleFields}
              labels={peopleLabels}
            />
          )}
        />
        <Route path={PERSON_DETAILS.INDEX} component={PersonDetailsContainer} />
        <Route
          exact
          path={PLANETS.INDEX}
          render={() => (
            <ItemsContainer
              getData={getPlanetsDataRequest}
              fields={planetFields}
              labels={planetLabels}
            />
          )}
        />
        <Route path={PLANET_DETAILS.INDEX} component={PlanetDetailsContainer} />
        <Redirect path="*" to={HOME.INDEX} />
      </Switch>
    </Suspense>
  );
};
