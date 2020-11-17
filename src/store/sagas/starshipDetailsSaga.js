import { call, put, takeEvery } from "redux-saga/effects";
import {
  getStarship,
  getStarshipPilots,
} from "../../services/starships-service";
import {
  getStarshipDetailsFailure,
  getStarshipDetailsRequest,
  getStarshipDetailsSuccess,
} from "../reducers/starshipsSlice";

export default function* starshipDetailsSaga() {
  yield takeEvery(getStarshipDetailsRequest.type, starshipDetailsSagaWorker);
}

function* starshipDetailsSagaWorker(action) {
  try {
    const { payload } = action;
    const starship = yield call(getStarship, payload);
    const pilots = yield call(getStarshipPilots, starship.pilots);
    yield put(getStarshipDetailsSuccess({ starship, pilots }));
  } catch (e) {
    yield put(getStarshipDetailsFailure());
  }
}
