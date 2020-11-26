import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { idRegExp } from "../../helpers/helpers";
import { getPerson } from "../../services/people-service";
import { getStarship } from "../../services/starships-service";
import {
  getStarshipDetailsFailure,
  getStarshipDetailsRequest,
  getStarshipDetailsSuccess,
} from "../reducers/starshipsSlice";
import { selectStarshipId } from "../selectors/starships";

export default function* starshipDetailsSaga() {
  yield takeEvery(getStarshipDetailsRequest.type, starshipDetailsSagaWorker);
}

export function* starshipDetailsSagaWorker() {
  try {
    const id = yield select(selectStarshipId);
    const starship = yield call(getStarship, id);
    const pilots = yield all(
      starship.pilots.map((pilot) => call(getPerson, pilot.match(idRegExp)[1]))
    );
    yield put(getStarshipDetailsSuccess({ starship, pilots }));
  } catch (e) {
    yield put(getStarshipDetailsFailure());
  }
}
