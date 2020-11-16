import { call, getContext, put, select, takeEvery } from "redux-saga/effects";
import { selectQueryParams } from "../selectors/starships";
import {
  getStarshipsRequest,
  getStarshipsFailure,
  getStarshipsSuccess,
  getSearchInputValue,
  setSearchValueFromUrl,
} from "../reducers/starshipsSlice";
import { getAllStarships } from "../../services/starships-service";

export default function* starshipsSaga() {
  yield takeEvery(
    [getStarshipsRequest.type, getSearchInputValue.type],
    starshipsSagaWorker
  );
  const history = yield getContext("history");
  const query = history.location.search;
  yield put(setSearchValueFromUrl(query.substr(8)));
}

function* starshipsSagaWorker() {
  try {
    const query = yield select(selectQueryParams);
    const history = yield getContext("history");
    history.push({
      pathname: "/starships",
      search: query,
    });
    const starships = yield call(getAllStarships, query);
    yield put(getStarshipsSuccess(starships));
  } catch (e) {
    yield put(getStarshipsFailure());
  }
}
