import { call, put, takeEvery } from "redux-saga/effects";
import { getResidentsRequest } from "../reducers/residensSlice";
 

export default function* residentssSaga() {
  yield takeEvery(getResidentsRequest.toString() ,residentsSagaWorker)
}

function* residentsSagaWorker(action) {
  try {
      console.log('residents saga');
    console.log(action);

    //let planet = yield call(getPlanet, id);
    //yield put(getPlanetDataRequestSuccess(planet))
    
  } catch (e) {
    console.log(e);
    //yield put(getStarshipsFailure());
  }
}
