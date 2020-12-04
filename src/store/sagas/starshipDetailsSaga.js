import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { getStarship } from "../../services/starships-service";
import { getPerson } from "../../services/people-service";
import {
  getStarshipDetailsSuccess,
  getStarshipDetailsFailure,
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
    const item = yield call(getStarship, id);
    yield put(getStarshipDetailsSuccess(item));
    const pilotsIds = yield select(selectStarshipPilotsIds);
    const pilots = yield all(pilotsIds.map((id) => call(getPerson, id)));
    yield put(getStarshipPilotsSuccess(pilots));
  } catch (e) {
    yield put(getStarshipDetailsFailure());
  }
}
