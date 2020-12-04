import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { getStarship } from "../../services/starships-service";
import { getPerson } from "../../services/people-service";
import {
  getStarshipDetailsSuccess,
  getStarshipDetailsFailure,
  getStarshipPilotsFailure,
  getStarshipPilotsRequest,
  getStarshipPilotsSuccess,
  getStarshipDetailsRequest,
} from "../reducers/starshipSlice";

import {
  selectStarshipId,
  selectStarshipPilotsIds,
} from "../selectors/starship";

export default function* starshipDetailsSaga() {
  yield takeLatest(getStarshipDetailsRequest.type, starshipDetailsSagaWorker);
}

export function* starshipDetailsSagaWorker() {
  try {
    const id = yield select(selectStarshipId);
    console.log(id);
    const item = yield call(getStarship, id);
    yield put(getStarshipDetailsSuccess(item));
    const pilotsIds = yield select(selectStarshipPilotsIds);
    yield put(getStarshipPilotsRequest());
    const pilots = yield all(pilotsIds.map((id) => call(getPerson, id)));
    yield put(getStarshipPilotsSuccess(pilots));
  } catch (e) {
    console.log(e);
    yield put(getStarshipDetailsFailure());
    yield put(getStarshipPilotsFailure());
  }
}
