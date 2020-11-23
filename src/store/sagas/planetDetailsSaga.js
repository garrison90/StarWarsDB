import { call, put, select, takeEvery } from "redux-saga/effects";
import { getPlanet, getPlanetResidents } from "../../services/planets-service";
import {
  getPlanetDataRequest,
  getPlanetDataRequestFailure,
  getPlanetDataRequestSuccess,
} from "../actions/planets";
import { selectPlanetId } from "../selectors/planets";

export function* planetDetailsSaga() {
  yield takeEvery(getPlanetDataRequest.toString(), planetDetailsSagaWorker);
}

export function* planetDetailsSagaWorker() {
  try {
    const id = yield select(selectPlanetId);
    let planet = yield call(getPlanet, id);
    let residents = yield call(getPlanetResidents, planet.residents);
    yield put(getPlanetDataRequestSuccess({ planet, residents }));
  } catch (e) {
    yield put(getPlanetDataRequestFailure());
  }
}
