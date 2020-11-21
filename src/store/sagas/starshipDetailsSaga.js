import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  getStarship,
  getStarshipPilots,
} from "../../services/starships-service";
import {
  getStarshipDetailsFailure,
  getStarshipDetailsRequest,
  getStarshipDetailsSuccess,
} from "../reducers/starshipsSlice";
import { selectStarshipId } from "../selectors/starships";

export default function* starshipDetailsSaga() {
  yield takeEvery(getStarshipDetailsRequest.type, starshipDetailsSagaWorker);
}

function* starshipDetailsSagaWorker() {
  try {
    const id = yield select(selectStarshipId);
    const starship = yield call(getStarship, id);
    const pilots = yield call(getStarshipPilots, starship.pilots);
    yield put(getStarshipDetailsSuccess({ starship, pilots }));
  } catch (e) {
    yield put(getStarshipDetailsFailure());
  }
}
