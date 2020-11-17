import { call, put, takeEvery } from "redux-saga/effects";
import {
  getAllPeopleRequest,
  getAllPeopleRequestSuccess,
} from "../reducers/peopleSlice";
import { getAllPeople } from "../../services/people-service";

export default function* peopleSaga() {
  yield takeEvery(getAllPeopleRequest.type, peopleSagaWorker);
}

function* peopleSagaWorker() {
  try {
    let people = yield call(getAllPeople);
    yield put(getAllPeopleRequestSuccess(people));
  } catch (e) {
    //yield put(getStarshipsFailure());
  } finally {
  }
}
