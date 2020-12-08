import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { getStarship } from "services/starships-service";
import { getPerson } from "services/people-service";
import {
  getStarshipDetailsSuccess,
  getStarshipDetailsFailure,
  getStarshipDetailsRequest,
  getStarshipPilotsSuccess,
} from "store/reducers/starshipSlice";
import { selectPilotsIds, selectStarshipId } from "store/selectors/starship";

export default function* starshipDetailsSaga() {
  yield takeLatest(getStarshipDetailsRequest.type, starshipDetailsSagaWorker);
}

export function* starshipDetailsSagaWorker() {
  try {
    const id = yield select(selectStarshipId);
    const starship = yield call(getStarship, id);
    yield put(getStarshipDetailsSuccess(starship));
    const pilotsIds = yield select(selectPilotsIds);
    const pilots = yield all(pilotsIds.map((id) => call(getPerson, id)));
    yield put(getStarshipPilotsSuccess(pilots));
  } catch (e) {
    yield put(getStarshipDetailsFailure());
  }
}
