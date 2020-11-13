import { call, getContext, put, select, takeEvery } from "redux-saga/effects";
import {
  GET_SEARCH_INPUT_VALUE,
  GET_STARSHIPS_REQUEST,
} from "../actionsTypes/starships";
import { getStarshipsFailure, getStarshipsSuccess } from "../actions/starships";
import { getAllStarships } from "../../services/api";
import { selectValue } from "../selectors/starships";

export default function* starshipsSaga() {
  yield takeEvery(
    [GET_STARSHIPS_REQUEST, GET_SEARCH_INPUT_VALUE],
    starshipsSagaWorker
  );
}

function* starshipsSagaWorker() {
  try {
    const query = yield select(selectValue);
    const history = yield getContext("history");
    let queryString = query ? `?search=${query}` : "";
    history.push({
      pathname: "/starships",
      search: queryString,
    });
    const results = yield call(getAllStarships, queryString);
    yield put(getStarshipsSuccess(results));
  } catch (e) {
    console.log(e);
    yield put(getStarshipsFailure());
  }
}
