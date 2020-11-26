import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { select } from "redux-saga/effects";
import { getAllStarships } from "../../services/starships-service";
import {
  getStarshipsFailure,
  getStarshipsSuccess,
} from "../../store/reducers/starshipsSlice";
import { starshipsSagaWorker } from "../../store/sagas/starshipsSaga";
import { selectPage, selectQuery } from "../../store/selectors/starships";
import { mockStarships } from "../helpers/mockData";

describe("test starships saga", () => {
  test("should load starships data in case of success", async () => {
    const fakeData = { starships: mockStarships, next: true };

    await expectSaga(starshipsSagaWorker)
      .provide([
        [select(selectQuery), "w"],
        [select(selectPage), 2],
        [matchers.call.fn(getAllStarships), fakeData],
      ])
      .put(getStarshipsSuccess(fakeData))
      .run();
  });
  test("should throw error in case of failure", async () => {
    const error = new Error("error");

    await expectSaga(starshipsSagaWorker)
      .provide([
        [select(selectQuery), "w"],
        [select(selectPage), 2],
        [matchers.call.fn(getAllStarships), throwError(error)],
      ])
      .put(getStarshipsFailure())
      .run();
  });
});
