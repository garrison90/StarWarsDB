import { call, put, all, select, takeLatest } from "redux-saga/effects";
import { getPerson } from "../../services/people-service";
import { getPlanet } from "../../services/planets-service";
import { getStarship } from "../../services/starships-service";
import {
  getPersonDataRequest,
  getPersonDataRequestFailure,
  getPersonDataRequestSuccess,
  getPersonStarshipsAndPlanetSuccess,
} from "../reducers/peopleSlice";
import {
  selectPersonHomeworldId,
  selectPersonId,
  selectPersonStarshipsIds,
} from "../selectors/people";

export default function* personDetailsSaga() {
  yield takeLatest(getPersonDataRequest.type, personDetailsSagaWorker);
}

export function* personDetailsSagaWorker() {
  try {
    const id = yield select(selectPersonId);
    const person = yield call(getPerson, id);
    yield put(getPersonDataRequestSuccess(person));
    const homeworldId = yield select(selectPersonHomeworldId);
    const starshipsIds = yield select(selectPersonStarshipsIds);
    const [starships, planet] = yield all([
      yield all(starshipsIds.map((id) => call(getStarship, id))),
      call(getPlanet, homeworldId),
    ]);
    yield put(getPersonStarshipsAndPlanetSuccess({ starships, planet }));
  } catch (e) {
    yield put(getPersonDataRequestFailure());
  }
}
