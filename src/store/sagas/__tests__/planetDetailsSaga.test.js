import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { select } from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { initialState as planetsState } from "../../reducers/planetsReducer";
import { getPlanet } from "../../../services/planets-service";
import {
  getPlanetDataRequest,
  getPlanetDataRequestSuccess,
} from "../../actions/planets";
import planetDetailsSaga, {
  planetDetailsSagaWorker,
  planetResidentsSagaWorker,
} from "../planetDetailsSaga";
import { selectPlanetId, selectPlanetResidents } from "../../selectors/planets";
import rootReducer from "../../reducers/rootReducer";
import { fakePeopleData, fakePlanet } from "../../../helpers/mockData";

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
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPlanetDataRequest.type).run();
    expect(result.storeState.planets.planet).toStrictEqual(fakePlanet);
  });

  test("should load planet residents in case of success", async () => {
    const saga = expectSaga(planetResidentsSagaWorker)
      .provide([
        [select(selectPlanetResidents), [1, 2]],
        { all: () => fakePeopleData },
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPlanetDataRequestSuccess.type).run();
    expect(result.storeState.planets.residents).toStrictEqual(fakePeopleData);
  });

  test("should throw error in case of failure in planet redisents saga", async () => {
    const saga = expectSaga(planetResidentsSagaWorker)
      .provide({ all: () => throwError(error) })
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPlanetDataRequestSuccess.type).run();
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
      .takeEvery(getPlanetDataRequest.type, planetDetailsSagaWorker)
      .finish()
      .isDone();
  });

  test("should fire on getPlanetDataRequestSuccess action", () => {
    testSaga(planetDetailsSaga)
      .next()
      .next()
      .takeEvery(getPlanetDataRequestSuccess.type, planetResidentsSagaWorker)
      .finish()
      .isDone();
  });
});
