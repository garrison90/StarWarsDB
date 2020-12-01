import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { getAllStarships } from "../../services/starships-service";
import rootReducer from "../../store/reducers/rootReducer";
import { itemsSagaWorker } from "../../store/sagas/itemsSaga";
import { selectPage, selectQuery } from "../../store/selectors/items";
import {
  getAllPeopleRequest,
  getPlanetsDataRequest,
  getStarshipsRequest,
  initialState as itemsState,
} from "../../store/reducers/itemsSlice";
import { getAllPeople } from "../../services/people-service";
import { getAllPlanets } from "../../services/planets-service";
import {
  fakePeopleData,
  fakePlanets,
  fakeStarships,
} from "../../helpers/mockData";

describe("items saga test", () => {
  const initialState = {
    items: itemsState,
  };
  const error = new Error("error");

  test("should load starships data in case of success", async () => {
    const saga = expectSaga(itemsSagaWorker, getStarshipsRequest)
      .provide([
        [matchers.select(selectQuery), "w"],
        [matchers.select(selectPage), 2],
        [
          matchers.call.fn(getAllStarships),
          { items: fakeStarships, next: true },
        ],
      ])
      .withReducer(rootReducer, initialState);

    const result = await saga.dispatch(getStarshipsRequest.type).run();
    expect(result.storeState.items.hasMore).toBe(true);
    expect(result.storeState.items.items).toStrictEqual(fakeStarships);
  });

  test("should throw error in case of failure in starships saga", async () => {
    const saga = expectSaga(itemsSagaWorker, getStarshipsRequest)
      .provide([
        [matchers.select(selectQuery), "w"],
        [matchers.select(selectPage), 2],
        [matchers.call.fn(getAllStarships), throwError(error)],
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getStarshipsRequest.type).run();
    expect(result.storeState.items.error).toBeTruthy();
  });

  test("should load people data in case of success", async () => {
    const saga = expectSaga(itemsSagaWorker, getAllPeopleRequest)
      .provide([
        [matchers.select(selectQuery), "w"],
        [matchers.select(selectPage), 2],
        [matchers.call.fn(getAllPeople), { items: fakePeopleData, next: true }],
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getAllPeopleRequest.type).run();
    expect(result.storeState.items.hasMore).toBe(true);
    expect(result.storeState.items.items).toStrictEqual(fakePeopleData);
  });

  test("should throw error in case of failure", async () => {
    const saga = expectSaga(itemsSagaWorker, getAllPeopleRequest)
      .provide([
        [matchers.select(selectQuery), "w"],
        [matchers.select(selectPage), 2],
        [matchers.call.fn(getAllPeople), throwError(error)],
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getAllPeopleRequest.type).run();
    expect(result.storeState.items.error).toBeTruthy();
  });

  test("should return planets data in case of success", async () => {
    const saga = expectSaga(itemsSagaWorker, getPlanetsDataRequest)
      .provide([
        [matchers.select(selectQuery), "w"],
        [matchers.select(selectPage), 4],
        [matchers.call.fn(getAllPlanets), { items: fakePlanets, next: null }],
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPlanetsDataRequest.type).run();
    expect(result.storeState.items.hasMore).toBeFalsy();
    expect(result.storeState.items.items).toStrictEqual(fakePlanets);
  });

  test("should throw error in case of failure in planets saga worker", async () => {
    const saga = expectSaga(itemsSagaWorker, getPlanetsDataRequest)
      .provide([
        [matchers.select(selectQuery), "w"],
        [matchers.select(selectPage), 4],
        [matchers.call.fn(getAllPlanets), throwError(error)],
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPlanetsDataRequest.type).run();
    expect(result.storeState.items.error).toBeTruthy();
  });
});
