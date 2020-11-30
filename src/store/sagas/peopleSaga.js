/* import { call, put, takeEvery } from "redux-saga/effects";
import {
  getAllPeopleRequest,
  getAllPeopleRequestFailure,
  getAllPeopleRequestSuccess,
} from "../reducers/peopleSlice";
import { getAllPeople } from "../../services/people-service";

export default function* peopleSaga() {
  yield takeEvery(getAllPeopleRequest.type, peopleSagaWorker);
}

export function* peopleSagaWorker() {
  try {
    let people = yield call(getAllPeople);
    yield put(getAllPeopleRequestSuccess(people));
  } catch (e) {
    yield put(getAllPeopleRequestFailure());
  }
} */
