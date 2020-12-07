import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { getPerson } from "../../services/people-service";
import { getPlanet } from "../../services/planets-service";
import {
  getPlanetDataRequest,
  getPlanetDataRequestFailure,
  getPlanetDataRequestSuccess,
  getPlanetResidentsSuccess,
} from "../actions/planets";
import { selectPlanetId, selectPlanetResidentsIds } from "../selectors/planets";

export default function* planetDetailsSaga() {
  yield takeLatest(getPlanetDataRequest.type, planetDetailsSagaWorker);
}

export function* planetDetailsSagaWorker() {
  try {
    const id = yield select(selectPlanetId);
    const planet = yield call(getPlanet, id);
    yield put(getPlanetDataRequestSuccess(planet));
    const residentsIds = yield select(selectPlanetResidentsIds);
    const residents = yield all(residentsIds.map((id) => call(getPerson, id)));
    yield put(getPlanetResidentsSuccess(residents));
  } catch (e) {
    yield put(getPlanetDataRequestFailure());
  }
}
