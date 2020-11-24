import { all, fork } from "redux-saga/effects";
import peopleSaga from "./peopleSaga";
import personDetailsSaga from "./personDetailsSaga";
import planetDetailsSaga from "./planetDetailsSaga";
import planetsSaga from "./planetsSaga";
import starshipDetailsSaga from "./starshipDetailsSaga";
import starshipsSaga from "./starshipsSaga";

export default function* rootSaga() {
  yield all([
    fork(planetDetailsSaga),
    fork(planetsSaga),
    fork(peopleSaga),
    fork(personDetailsSaga),
    fork(starshipDetailsSaga),
    fork(starshipsSaga),
  ]);
}
