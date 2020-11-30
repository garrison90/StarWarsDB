/* import { call, put, takeEvery } from "redux-saga/effects";
import { getAllPlanets } from "../../services/planets-service";
import {
  getPlanetsDataRequest,
  getPlanetsDataRequestFailure,
  getPlanetsDataRequestSuccess,
} from "../actions/planets";

export default function* planetsSaga() {
  yield takeEvery(getPlanetsDataRequest.type, planetsSagaWorker);
}

export function* planetsSagaWorker() {
  try {
    let results = yield call(getAllPlanets);
    yield put(getPlanetsDataRequestSuccess(results));
  } catch (e) {
    yield put(getPlanetsDataRequestFailure());
  }
}
 */
