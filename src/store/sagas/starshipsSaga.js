import { call, put, takeEvery } from "redux-saga/effects";
import { GET_STARSHIPS_REQUEST } from "../actionsTypes/starships";
import { getStarshipsFailure, getStarshipsSuccess } from "../actions/starships";
import { getAllStarships } from "../../services/api";

export default function* starshipsSaga() {
  yield takeEvery(GET_STARSHIPS_REQUEST, starshipsSagaWorker);
}

function* starshipsSagaWorker() {
  try {
    const results = yield call(getAllStarships);
    yield put(getStarshipsSuccess(results));
  } catch (e) {
    console.log(e);
    yield put(getStarshipsFailure());
  }
}
