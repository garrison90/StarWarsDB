import { call, put, takeEvery } from "redux-saga/effects";
import { getAllPlanets } from "../../services/planets-service";
import { getPlanetsDataRequest, getPlanetsDataRequestSuccess } from "../reducers/planetsReducer";

export default function* planetsSaga() {
  yield takeEvery(getPlanetsDataRequest.toString() ,planetsSagaWorker)
}

function* planetsSagaWorker() {
  try {
    let results = yield call(getAllPlanets);
    yield put(getPlanetsDataRequestSuccess(results))
  } catch (e) {
    console.log(e);
    //yield put(getStarshipsFailure());
  }
}
