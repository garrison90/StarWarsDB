import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { getPerson } from "../../services/people-service";
import { getStarship } from "../../services/starships-service";
import {
  getStarshipDetailsFailure,
  getStarshipDetailsRequest,
  getStarshipDetailsSuccess,
  getStarshipPilotsFailure,
  getStarshipPilotsRequest,
  getStarshipPilotsSuccess,
} from "../reducers/starshipsSlice";
import { selectPilotsIds, selectStarshipId } from "../selectors/starships";

export default function* starshipDetailsSaga() {
  yield takeLatest(getStarshipDetailsRequest.type, starshipDetailsSagaWorker);
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
    yield put(getStarshipPilotsRequest());
    const pilotsIds = yield select(selectPilotsIds);
    const pilots = yield all(pilotsIds.map((id) => call(getPerson, id)));
    yield put(getStarshipPilotsSuccess(pilots));
  } catch (e) {
    yield put(getStarshipPilotsFailure());
  }
}
