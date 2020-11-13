import { call, put, take, takeEvery } from "redux-saga/effects";
import { getPlanet } from "../../services/planets-service";
import { getPlanetDataRequest, getPlanetDataRequestSuccess } from "../reducers/planetsReducer";
import { getResidentsRequest } from "../reducers/residensSlice";
import residentssSaga from "./residentsSaga";

export default function* planetDetailsSaga() {
  yield takeEvery(getPlanetDataRequest.toString() ,planetDetailsSagaWorker)
}

function* planetDetailsSagaWorker(action) {
  try {
    const id = action.payload;
    let planet = yield call(getPlanet, id);
    yield put(getPlanetDataRequestSuccess(planet))
    yield* put(getResidentsRequest.toString());


  } catch (e) {
    console.log(e);
    //yield put(getStarshipsFailure());
  }
}
