import { call, put, takeEvery, all, select } from "redux-saga/effects";
import { idRegExp } from "../../helpers/helpers";
import { getPerson, getPersonStarships } from "../../services/people-service";
import { getPlanet } from "../../services/planets-service";
import {
  getPersonDataRequest,
  getPersonDataRequestSuccess,
} from "../reducers/peopleSlice";
import { selectPersonId } from "../selectors/people";

export default function* personDetailsSaga() {
  yield takeEvery(getPersonDataRequest.type, personDetailsSagaWorker);
}

function* personDetailsSagaWorker() {
  try {
    const id = yield select(selectPersonId);
    const person = yield call(getPerson, id);
    const planetId = person.homeworld.match(idRegExp)[1];
    const [starships, planet] = yield all([
      yield call(getPersonStarships, person.starships),
      yield call(getPlanet, planetId),
    ]);
    yield put(getPersonDataRequestSuccess({ person, planet, starships }));
  } catch (e) {}
}
