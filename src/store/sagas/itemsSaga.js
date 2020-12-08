import { call, put, select, getContext, takeLatest } from "redux-saga/effects";
import { sagaHelper } from "helpers/sagaHelpers";
import {
  getAllPeopleRequest,
  getItemsRequestSuccess,
  getItemsRequestFailure,
  getPlanetsDataRequest,
  getStarshipsRequest,
} from "store/reducers/itemsSlice";
import { selectPage, selectQuery } from "store/selectors/items";

export default function* itemsSaga() {
  yield takeLatest(
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
    yield put(getItemsRequestFailure());
  }
}
