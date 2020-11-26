import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { getPerson } from "../../services/people-service";
import { getPlanet } from "../../services/planets-service";
import {
  getPlanetDataRequest,
  getPlanetDataRequestFailure,
  getPlanetDataRequestSuccess,
  getPlanetResidentsFailure,
  getPlanetResidentsSuccess,
} from "../actions/planets";
import { selectPlanetId, selectPlanetResidents } from "../selectors/planets";

export default function* planetDetailsSaga() {
  yield takeEvery(getPlanetDataRequest.type, planetDetailsSagaWorker);
  yield takeEvery(getPlanetDataRequestSuccess.type, planetResidentsSagaWorker);
}

export function* planetDetailsSagaWorker() {
  try {
    const id = yield select(selectPlanetId);
    const planet = yield call(getPlanet, id);
    yield put(getPlanetDataRequestSuccess(planet));
  } catch (e) {
    yield put(getPlanetDataRequestFailure());
  }
}

export function* planetResidentsSagaWorker() {
  try {
    const residents = yield select(selectPlanetResidents);
    const results = yield all(residents.map((id) => call(getPerson, id)));
    yield put(getPlanetResidentsSuccess(results));
  } catch (e) {
    yield put(getPlanetResidentsFailure());
  }
}
