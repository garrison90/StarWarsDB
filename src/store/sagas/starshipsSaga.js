import { call, put, select, takeEvery } from "redux-saga/effects";
import { getAllStarships } from "../../services/starships-service";
import {
  getStarshipsRequest,
  getStarshipsSuccess,
} from "../reducers/starshipsSlice";
import { selectPage, selectQuery } from "../selectors/starships";

export default function* anotherStarshipsSaga() {
  yield takeEvery(getStarshipsRequest.type, starshipsSagaWorker);
}

function* starshipsSagaWorker() {
  try {
    const query = yield select(selectQuery);
    const pageNumber = yield select(selectPage);
    const response = yield call(getAllStarships, [query, pageNumber]);
    const { starships, next } = response;
    yield put(getStarshipsSuccess({ starships, next }));
  } catch (e) {
    console.log(e);
    //yield put(getStarshipsFailure());
  }
}
