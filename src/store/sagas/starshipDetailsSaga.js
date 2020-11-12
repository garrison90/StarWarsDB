import { call, put, takeEvery } from "redux-saga/effects";
import { getStarship, getStarshipPilots } from "../../services/api";
import {
  getStarshipDetailsFailure,
  getStarshipDetailsSuccess,
  getStarshipPilotsFailure,
  getStarshipPilotsSuccess,
} from "../actions/starships";
import { GET_STARSHIP_DETAILS_REQUEST } from "../actionsTypes/starships";

export default function* starshipDetailsSaga() {
  yield takeEvery(GET_STARSHIP_DETAILS_REQUEST, starshipDetailsSagaWorker);
}

function* starshipDetailsSagaWorker(action) {
  try {
    const { payload } = action;
    const result = yield call(getStarship, payload);
    const pilots = yield call(getStarshipPilots, result.pilots);
    yield put(getStarshipDetailsSuccess(result));
    yield put(getStarshipPilotsSuccess(pilots));
  } catch (e) {
    console.log(e);
    yield put(getStarshipDetailsFailure());
    yield put(getStarshipPilotsFailure());
  }
}
