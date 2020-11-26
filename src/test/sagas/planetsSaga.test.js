import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { getAllPlanets } from "../../services/planets-service";
import { getPlanetsDataRequest } from "../../store/actions/planets";
import { initialState as planetsState } from "../../store/reducers/planetsReducer";
import rootReducer from "../../store/reducers/rootReducer";
import { planetsSagaWorker } from "../../store/sagas/planetsSaga";
import { fakePlanets } from "../helpers/mockData";

describe("planets saga test", () => {
  const initialState = {
    planets: planetsState,
  };
  const error = new Error("error");

  test("should return planets data in case of success", async () => {
    const saga = expectSaga(planetsSagaWorker)
      .provide([[matchers.call.fn(getAllPlanets), fakePlanets]])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPlanetsDataRequest.type).run();
    expect(result.storeState.planets.planets).toStrictEqual(fakePlanets);
  });

  test("should throw error in case of failure in planets saga worker", async () => {
    const saga = expectSaga(planetsSagaWorker)
      .provide([[matchers.call.fn(getAllPlanets), throwError(error)]])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPlanetsDataRequest.type).run();
    expect(result.storeState.planets.error).toBeTruthy();
  });
});
