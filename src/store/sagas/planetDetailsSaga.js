import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { getPerson } from "../../services/people-service";
import { getPlanet } from "../../services/planets-service";
import {
  getPlanetDataRequest,
  getPlanetDataRequestFailure,
  getPlanetDataRequestSuccess,
} from "../actions/planets";
import { selectPlanetId } from "../selectors/planets";
import { idRegExp } from "../../helpers/helpers";

export default function* planetDetailsSaga() {
  yield takeEvery(getPlanetDataRequest.toString(), planetDetailsSagaWorker);
}

export function* planetDetailsSagaWorker() {
  try {
    const id = yield select(selectPlanetId);
    let planet = yield call(getPlanet, id);

    let residents = yield all(
      planet.residents.map((resident) =>
        call(getPerson, resident.match(idRegExp)[1])
      )
    );
    yield put(getPlanetDataRequestSuccess({ planet, residents }));
  } catch (e) {
    yield put(getPlanetDataRequestFailure());
  }
}
