import { call, put, takeEvery, all, select } from "redux-saga/effects";
import { idRegExp } from "../../helpers/helpers";
import { getPerson } from "../../services/people-service";
import { getPlanet } from "../../services/planets-service";
import { getStarship } from "../../services/starships-service";
import {
  getPersonDataRequest,
  getPersonDataRequestFailure,
  getPersonDataRequestSuccess,
} from "../reducers/peopleSlice";
import { selectPersonId } from "../selectors/people";

export default function* personDetailsSaga() {
  yield takeEvery(getPersonDataRequest.type, personDetailsSagaWorker);
}

export function* personDetailsSagaWorker() {
  try {
    const id = yield select(selectPersonId);
    const person = yield call(getPerson, id);
    const planetId = person.homeworld.match(idRegExp)[1];
    const [starships, planet] = yield all([
      yield all(
        person.starships.map((starship) =>
          call(getStarship, starship.match(idRegExp)[1])
        )
      ),
      yield call(getPlanet, planetId),
    ]);
    yield put(getPersonDataRequestSuccess({ person, planet, starships }));
  } catch (e) {
    yield put(getPersonDataRequestFailure());
  }
}
