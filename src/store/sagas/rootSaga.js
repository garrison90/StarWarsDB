import { all, fork } from "redux-saga/effects";
import itemsSaga from "./itemsSaga";
import personDetailsSaga from "./personDetailsSaga";
import planetDetailsSaga from "./planetDetailsSaga";
import starshipDetailsSaga from "./starshipDetailsSaga";

export default function* rootSaga() {
  yield all([
    fork(planetDetailsSaga),
    fork(personDetailsSaga),
    fork(starshipDetailsSaga),
    fork(itemsSaga),
  ]);
}
