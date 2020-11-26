import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { getAllStarships } from "../../services/starships-service";
import rootReducer from "../../store/reducers/rootReducer";
import {
  getStarshipsRequest,
  initialState as starshipsState,
} from "../../store/reducers/starshipsSlice";
import { starshipsSagaWorker } from "../../store/sagas/starshipsSaga";
import { selectPage, selectQuery } from "../../store/selectors/starships";
import { fakeStarships } from "../helpers/mockData";

describe("starships saga test", () => {
  const initialState = {
    starships: starshipsState,
  };
  const error = new Error("error");

  test("should load starships data in case of success", async () => {
    const saga = expectSaga(starshipsSagaWorker)
      .provide([
        [matchers.select(selectQuery), "w"],
        [matchers.select(selectPage), 2],
        [
          matchers.call.fn(getAllStarships),
          { starships: fakeStarships, next: true },
        ],
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getStarshipsRequest.type).run();
    expect(result.storeState.starships.hasMore).toBe(true);
    expect(result.storeState.starships.starships).toStrictEqual(fakeStarships);
  });

  test("should throw error in case of failure in starships saga", async () => {
    const saga = expectSaga(starshipsSagaWorker)
      .provide([
        [matchers.select(selectQuery), "w"],
        [matchers.select(selectPage), 2],
        [matchers.call.fn(getAllStarships), throwError(error)],
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getStarshipsRequest.type).run();
    expect(result.storeState.starships.error).toBeTruthy();
  });
});
