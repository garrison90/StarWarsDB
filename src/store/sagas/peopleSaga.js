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
    let results = yield call(getAllPeople);
    yield put(getAllPeopleRequestSuccess(results));
  } catch (e) {
    console.log(e);
    //yield put(getStarshipsFailure());
  }
}
