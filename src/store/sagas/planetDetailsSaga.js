import { call, put, select, takeEvery } from "redux-saga/effects";
import { getPlanet, getPlanetResidenst } from "../../services/planets-service";
import {
  getPlanetDataRequest,
  getPlanetDataRequestFailure,
  getPlanetDataRequestSuccess,
} from "../actions/planets";
import { selectPlanetId } from "../selectors/planets";

export default function* planetDetailsSaga() {
  yield takeEvery(getPlanetDataRequest.toString(), planetDetailsSagaWorker);
}

function* planetDetailsSagaWorker() {
  try {
    const id = yield select(selectPlanetId);
    let planet = yield call(getPlanet, id);
    let residents = yield call(getPlanetResidenst, planet.residents);
    yield put(getPlanetDataRequestSuccess({ planet, residents }));
  } catch (e) {
    yield put(getPlanetDataRequestFailure());
  }
}
