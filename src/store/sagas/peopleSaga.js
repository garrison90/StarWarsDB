import { call, put, takeEvery } from "redux-saga/effects";
import { getAllPlanets } from "../../services/planets-service";
import { getPlanetsRequestSuccess } from "../actions/planets";
import { GET_PLANETS_REQUEST } from "../actionsTypes/planets";

export default function* peopleSaga() {
  yield takeEvery(GET_PLANETS_REQUEST, peopleSagaWorker);
}

function* peopleSagaWorker() {
  try {
    let results = yield call(getAllPlanets);
    yield put(getPlanetsRequestSuccess(results));
  } catch (e) {
    console.log(e);
    //yield put(getStarshipsFailure());
  }
}
