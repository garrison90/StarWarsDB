import { call, put, takeEvery } from "redux-saga/effects";
import { getPlanet, getPlanetResidenst } from "../../services/planets-service";
import { getPlanetDataRequest, getPlanetDataRequestSuccess, getResidentsRequestSuccess } from "../reducers/planetsReducer";


export default function* planetDetailsSaga() {
  yield takeEvery(getPlanetDataRequest.toString() ,planetDetailsSagaWorker)
}

function* planetDetailsSagaWorker(action) {
  try {
    const id = action.payload;
    let planet = yield call(getPlanet, id);
    let residents = yield call(getPlanetResidenst, planet.residents);
    yield put(getPlanetDataRequestSuccess(planet))
     yield put (getResidentsRequestSuccess(residents))
  } catch (e) {
    console.log(e);
    //yield put(getStarshipsFailure());
  }
}
