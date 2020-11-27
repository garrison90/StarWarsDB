import { call, getContext, put, select, takeLatest } from "redux-saga/effects";
import { getAllStarships } from "../../services/starships-service";
import {
  getStarshipsFailure,
  getStarshipsRequest,
  getStarshipsSuccess,
} from "../reducers/starshipsSlice";
import { selectPage, selectQuery } from "../selectors/starships";

export default function* starshipsSaga() {
  yield takeLatest(getStarshipsRequest.type, starshipsSagaWorker);
}

export function* starshipsSagaWorker() {
  try {
    const query = yield select(selectQuery);
    const pageNumber = yield select(selectPage);
    const response = yield call(getAllStarships, [query, pageNumber]);
    const { starships, next } = response;
    yield put(getStarshipsSuccess({ starships, next }));
    const history = yield getContext("history");
    let searchStr = query ? `/?search=${query}` : "";
    yield call(history.push, {
      pathname: "/starships",
      search: searchStr,
    });
  } catch (e) {
    yield put(getStarshipsFailure());
  }
}
