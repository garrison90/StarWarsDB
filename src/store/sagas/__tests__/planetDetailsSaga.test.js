import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { select } from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { initialState as planetsState } from "../../reducers/planetsReducer";
import { getPlanet } from "../../../services/planets-service";
import { getPlanetDataRequest } from "../../actions/planets";
import planetDetailsSaga, {
  planetDetailsSagaWorker,
} from "../planetDetailsSaga";
import {
  selectPlanetId,
  selectPlanetResidentsIds,
} from "../../selectors/planets";
import rootReducer from "../../reducers/rootReducer";
import { fakePeopleData, fakePlanet } from "../../../helpers/mockData";
import { getPerson } from "../../../services/people-service";

describe("planet details saga test", () => {
  const initialState = {
    planets: planetsState,
  };

  const error = new Error("error");

  test("should load planet details data in case of success", async () => {
    const saga = expectSaga(planetDetailsSagaWorker)
      .provide([
        [select(selectPlanetId), 23],
        [matchers.call.fn(getPlanet), fakePlanet],
        [select(selectPlanetResidentsIds), ["43", "62"]],
        { all: () => fakePeopleData },
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPlanetDataRequest.type).run();
    expect(result.storeState.planets.planet).toStrictEqual(fakePlanet);
    expect(result.storeState.planets.planetResidents).toStrictEqual(
      fakePeopleData
    );
  });

  test("should throw error in case of failure residents request", async () => {
    const saga = expectSaga(planetDetailsSagaWorker)
      .provide([
        [select(selectPlanetId), 23],
        [matchers.call.fn(getPlanet), fakePlanet],
        [select(selectPlanetResidentsIds), ["43", "62"]],
        [matchers.call.fn(getPerson, ["43", "62"]), throwError(error)],
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPlanetDataRequest.type).run();
    expect(result.storeState.planets.error).toBeTruthy();
  });

  test("should throw error in case of failure in planet details saga", async () => {
    const saga = expectSaga(planetDetailsSagaWorker)
      .provide([
        [select(selectPlanetId), 23],
        [matchers.call.fn(getPlanet), throwError(error)],
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPlanetDataRequest.type).run();
    expect(result.storeState.planets.error).toBeTruthy();
  });

  test("should fire on getPlanetDataRequest action", () => {
    testSaga(planetDetailsSaga)
      .next()
      .takeLatest(getPlanetDataRequest.type, planetDetailsSagaWorker)
      .finish()
      .isDone();
  });
});
