import { call, takeEvery, put, select, getContext } from "redux-saga/effects";
import { sagaHelper } from "../../helpers/sagaHelpers";
import {
  getAllPeopleRequest,
  getItemsRequestSuccess,
  getItemsRequestFailure,
  getPlanetsDataRequest,
  getStarshipsRequest,
} from "../reducers/itemsSlice";
import { selectPage, selectQuery } from "../selectors/items";

export default function* itemsSaga() {
  yield takeEvery(
    [
      getAllPeopleRequest.type,
      getPlanetsDataRequest.type,
      getStarshipsRequest.type,
    ],
    itemsSagaWorker
  );
}

export function* itemsSagaWorker({ type }) {
  try {
    const query = yield select(selectQuery);
    const pageNumber = yield select(selectPage);
    const response = yield call(sagaHelper[type].fn, [query, pageNumber]);
    const { items, next } = response;
    yield put(getItemsRequestSuccess({ items, next }));
    const history = yield getContext("history");
    const searchStr = query ? `/?search=${query}` : "";
    yield call(history.push, {
      pathname: sagaHelper[type].pathname,
      search: searchStr,
    });
  } catch (e) {
    console.log(e);
    yield put(getItemsRequestFailure());
  }
}
