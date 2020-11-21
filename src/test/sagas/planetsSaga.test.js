import { call, put } from "redux-saga/effects";
import { getAllPlanets } from "../../services/planets-service";
import {
  getPlanetsDataRequestFailure,
  getPlanetsDataRequestSuccess,
} from "../../store/actions/planets";
import { planetsSagaWorker } from "../../store/sagas/planetsSaga";

describe("planets saga", () => {
  it("if request success", () => {
    const generator = planetsSagaWorker();
    const planets = [];
    expect(generator.next().value).toEqual(call(getAllPlanets));
    expect(generator.next(planets).value).toEqual(
      put(getPlanetsDataRequestSuccess(planets))
    );
    expect(generator.next().done).toBe(true);
  });

  it("if request failed", () => {
    const generator = planetsSagaWorker();
    const error = new Error();
    expect(generator.next().value).toEqual(call(getAllPlanets));
    expect(generator.throw(error).value).toEqual(
      put(getPlanetsDataRequestFailure())
    );
    expect(generator.next().done).toBe(true);
  });
});
