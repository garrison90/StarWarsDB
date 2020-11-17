import { call, put, takeEvery, all } from "redux-saga/effects";
import { idRegExp } from "../../helpers/helpers";
import { getPerson, getPersonStarships } from "../../services/people-service";
import { getPlanet } from "../../services/planets-service";
import {
  getPersonDataRequest,
  getPersonDataRequestSuccess,
} from "../reducers/peopleSlice";

export default function* personDetailsSaga() {
  yield takeEvery(getPersonDataRequest.type, personDetailsSagaWorker);
}

function* personDetailsSagaWorker({ payload }) {
  try {
    const person = yield call(getPerson, payload);
    const planetId = person.homeworld.match(idRegExp)[1];
    const [starships, planet] = yield all([
      yield call(getPersonStarships, person.starships),
      yield call(getPlanet, planetId),
    ]);
    yield put(getPersonDataRequestSuccess({ person, planet, starships }));
  } catch (e) {}
}
