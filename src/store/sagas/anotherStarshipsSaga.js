import { call, delay, put, takeEvery } from "redux-saga/effects";
import { transformStarship } from "../../helpers/helpers";
import { getAnotherStarships } from "../../services/anotherApi";
import {
  getAnotherStarshipsRequest,
  getAnotherStarshipsSuccess,
} from "../reducers/anotherStarshipsSlice";

export default function* anotherStarshipsSaga() {
  yield takeEvery(getAnotherStarshipsRequest.type, anotherStarshipsSagaWorker);
}

function* anotherStarshipsSagaWorker(action) {
  try {
    console.log("saga start");
    const { query, pageNumber } = action.payload;
    const result = yield call(getAnotherStarships, [query, pageNumber]);
    console.log("result", result);
    const { results, next } = result.data;
    let starships = results.map(transformStarship);
    //console.log(starships);
    yield put(getAnotherStarshipsSuccess({ starships, next }));
  } catch (e) {
    console.log(e);
    //yield put(getStarshipsFailure());
  }
}
