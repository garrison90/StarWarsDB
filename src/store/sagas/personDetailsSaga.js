import { call, put, takeEvery } from "redux-saga/effects";
import { getPerson, getPersonHomeworld } from "../../services/people-service";
import {
  getPersonDetailsRequestSuccess,
  getPersonHomeworldSuccess,
} from "../actions/people";
import { GET_PERSON_DETAILS_REQUEST } from "../actionsTypes/people";

export default function* personDetailsSaga() {
  yield takeEvery(GET_PERSON_DETAILS_REQUEST, personDetailsSagaWorker);
}

function* personDetailsSagaWorker(action) {
  try {
    const { payload } = action;
    const result = yield call(getPerson, payload);
    yield put(getPersonDetailsRequestSuccess(result));
    /* const planet = yield call(getPersonHomeworld, result.homeworld);
    console.log(planet, "saga");
    yield put(getPersonHomeworldSuccess(planet)); */
  } catch (e) {
    console.log(e);
    /* yield put(getStarshipDetailsFailure());
    yield put(getStarshipPilotsFailure()); */
  }
}
