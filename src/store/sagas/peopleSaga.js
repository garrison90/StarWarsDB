import { call, put, takeEvery } from "redux-saga/effects";
import { getAllPeopleRequest, getAllPeopleRequestSuccess } from "../reducers/peopleSlice";
import {getAllPeople} from '../../services/people-service';


export default function* peopleSaga() {
  yield takeEvery(getAllPeopleRequest.toString(), peopleSagaWorker);
}

function* peopleSagaWorker() {
  try {
    console.log('saga started');
    let results = yield call(getAllPeople);
    console.log(results);
    yield put(getAllPeopleRequestSuccess(results));
  } catch (e) {
    console.log(e);
    //yield put(getStarshipsFailure());
  }
}
