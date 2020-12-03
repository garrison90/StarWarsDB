import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { select } from "redux-saga-test-plan/matchers";
import {
  getStarshipDetailsRequest,
  getStarshipDetailsSuccess,
  initialState as starshipsState,
} from "../../reducers/starshipsSlice";
import { selectPilotsIds, selectStarshipId } from "../../selectors/starships";
import starshipDetailsSaga, {
  starshipDetailsSagaWorker,
  starshipPilotsSagaWorker,
} from "../../sagas/starshipDetailsSaga";
import { throwError } from "redux-saga-test-plan/providers";
import { fakePeopleData, fakeStarship } from "../../../helpers/mockData";
import rootReducer from "../../reducers/rootReducer";
import { getStarship } from "../../../services/starships-service";

describe("starship details saga test", () => {
  const initialState = {
    starships: starshipsState,
  };
  const error = new Error("error");

  test("should load starship details data in case of success", async () => {
    const saga = expectSaga(starshipDetailsSagaWorker)
      .provide([
        [select(selectStarshipId), 23],
        [matchers.call.fn(getStarship), fakeStarship],
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getStarshipDetailsRequest.type).run();
    expect(result.storeState.starships.starship).toStrictEqual(fakeStarship);
  });

  test("should throw error in case of failure in starship pilots saga", async () => {
    const saga = expectSaga(starshipPilotsSagaWorker)
      .provide({ all: () => throwError(error) })
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getStarshipDetailsSuccess.type).run();
    expect(result.storeState.starships.error).toBeTruthy();
  });

  test("should load starship pilots in case of success", async () => {
    const saga = expectSaga(starshipPilotsSagaWorker)
      .provide([
        [select(selectPilotsIds), [1, 2]],
        { all: () => fakePeopleData },
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getStarshipDetailsSuccess.type).run();
    expect(result.storeState.starships.pilots).toStrictEqual(fakePeopleData);
  });

  test("should throw error in case of failure in starship details saga", async () => {
    const saga = expectSaga(starshipDetailsSagaWorker)
      .provide([
        [select(selectStarshipId), 23],
        [matchers.call.fn(getStarship), throwError(error)],
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getStarshipDetailsRequest.type).run();
    expect(result.storeState.starships.error).toBeTruthy();
  });

  test("should fire on getStarshipDetailsRequest action", () => {
    testSaga(starshipDetailsSaga)
      .next()
      .takeLatest(getStarshipDetailsRequest.type, starshipDetailsSagaWorker)
      .finish()
      .isDone();
  });

  test("should fire on getStarshipDetailsSuccess action", () => {
    testSaga(starshipDetailsSaga)
      .next()
      .next()
      .takeEvery(getStarshipDetailsSuccess.type, starshipPilotsSagaWorker)
      .finish()
      .isDone();
  });
});
