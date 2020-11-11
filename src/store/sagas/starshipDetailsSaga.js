import { call, put, takeEvery } from "redux-saga/effects";
import { getStarship } from "../../services/api";
import {
  getStarshipDetailsFailure,
  getStarshipDetailsSuccess,
} from "../actions/starships";
import { GET_STARSHIP_DETAILS_REQUEST } from "../actionsTypes/starships";

export default function* starshipDetailsSaga() {
  yield takeEvery(GET_STARSHIP_DETAILS_REQUEST, starshipDetailsSagaWorker);
}

function* starshipDetailsSagaWorker(action) {
  try {
    const { payload } = action;
    const results = yield call(getStarship, payload);
    console.log(results.pilots);
    yield put(getStarshipDetailsSuccess(results));
  } catch (e) {
    console.log(e);
    yield put(getStarshipDetailsFailure());
  }
}
