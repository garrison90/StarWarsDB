import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { getPerson } from "../../services/people-service";
import { getStarship } from "../../services/starships-service";
import {
  getStarshipDetailsFailure,
  getStarshipDetailsRequest,
  getStarshipDetailsSuccess,
  getStarshipPilotsFailure,
  getStarshipPilotsSuccess,
} from "../reducers/starshipsSlice";
import { selectPilots, selectStarshipId } from "../selectors/starships";

export default function* starshipDetailsSaga() {
  yield takeEvery(getStarshipDetailsRequest.type, starshipDetailsSagaWorker);
  yield takeEvery(getStarshipDetailsSuccess.type, starshipPilotsSagaWorker);
}

export function* starshipDetailsSagaWorker() {
  try {
    const id = yield select(selectStarshipId);
    const starship = yield call(getStarship, id);
    yield put(getStarshipDetailsSuccess(starship));
  } catch (e) {
    yield put(getStarshipDetailsFailure());
  }
}

export function* starshipPilotsSagaWorker() {
  try {
    const pilotsIds = yield select(selectPilots);
    const pilots = yield all(pilotsIds.map((id) => call(getPerson, id)));
    yield put(getStarshipPilotsSuccess(pilots));
  } catch (e) {
    yield put(getStarshipPilotsFailure());
  }
}
