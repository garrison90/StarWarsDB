import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { select } from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { getPerson } from "../../services/people-service";
import { getPlanet } from "../../services/planets-service";
import {
  getPlanetDataRequest,
  getPlanetDataRequestFailure,
  getPlanetDataRequestSuccess,
} from "../../store/actions/planets";
import {
  planetDetailsSagaWorker,
  planetResidentsSagaWorker,
} from "../../store/sagas/planetDetailsSaga";
import {
  selectPlanetId,
  selectPlanetResidents,
} from "../../store/selectors/planets";
import { mockPerson, mockPlanet } from "../helpers/mockData";
import rootReducer from "../../store/reducers/rootReducer";
import { initialState as planetsState } from "../../store/reducers/planetsReducer";

describe("planet details saga test", () => {
  const initialState = {
    planets: planetsState,
  };

  test("should load planet details data in case of success", async () => {
    const saga = expectSaga(planetDetailsSagaWorker)
      .provide([
        [select(selectPlanetId), 23],
        [matchers.call.fn(getPlanet), mockPlanet],
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPlanetDataRequest.type).run();
    expect(result.storeState.planets.planet).toStrictEqual(mockPlanet);
  });

  test("should load planet residents in case of success", async () => {
    const saga = expectSaga(planetResidentsSagaWorker)
      .provide([
        [select(selectPlanetResidents), ["1"]],
        [matchers.call.fn(getPerson), mockPerson],
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPlanetDataRequestSuccess.type).run();
    expect(result.storeState.planets.residents).toStrictEqual([mockPerson]);
  });

  test("should throw error in case of failure in planet redisents saga", async () => {
    const error = new Error("error");

    const saga = expectSaga(planetResidentsSagaWorker)
      .provide([
        [select(selectPlanetResidents), ["1"]],
        [matchers.call.fn(getPerson), throwError(error)],
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPlanetDataRequestSuccess.type).run();
    expect(result.storeState.planets.error).toBeTruthy();
  });

  test("should throw error in case of failure in planet details saga", async () => {
    const error = new Error("error");

    const saga = expectSaga(planetDetailsSagaWorker)
      .provide([
        [select(selectPlanetId), 23],
        [matchers.call.fn(getPlanet), throwError(error)],
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPlanetDataRequest.type).run();
    expect(result.storeState.planets.error).toBeTruthy();
  });
});
