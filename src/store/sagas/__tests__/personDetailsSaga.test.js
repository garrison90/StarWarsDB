import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { select } from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import {
  fakePerson,
  fakePlanet,
  fakeStarships,
} from "../../../helpers/mockData";
import { getPerson } from "../../../services/people-service";
import { getStarship } from "../../../services/starships-service";
import {
  getPersonDataRequest,
  getPersonDataRequestSuccess,
  initialState as peopleState,
} from "../../reducers/peopleSlice";
import rootReducer from "../../reducers/rootReducer";
import personDetailsSaga, {
  personDetailsSagaWorker,
  personStarshipsAndPlanetSagaWorker,
} from "../../sagas/personDetailsSaga";
import {
  selectPersonHomeworldId,
  selectPersonId,
  selectPersonStarshipsIds,
} from "../../selectors/people";

describe("test person details saga", () => {
  const initialState = {
    people: peopleState,
  };
  const error = new Error("error");

  test("should load person details in case of success", async () => {
    const saga = expectSaga(personDetailsSagaWorker)
      .provide([
        [select(selectPersonId), 23],
        [matchers.call.fn(getPerson), fakePerson],
        [select(selectPersonHomeworldId), 7],
        [select(selectPersonStarshipsIds), ["3", "9"]],
        { all: () => [fakeStarships, fakePlanet] },
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPersonDataRequest.type).run();
    expect(result.storeState.people.selectedPerson).toStrictEqual(fakePerson);
    expect(result.storeState.people.personStarships).toStrictEqual(
      fakeStarships
    );
    expect(result.storeState.people.personHomeworld).toStrictEqual(fakePlanet);
  });

  test("should throw error if person starships data request failed", async () => {
    const saga = expectSaga(personDetailsSagaWorker)
      .provide([
        [select(selectPersonId), 23],
        [matchers.call.fn(getPerson), fakePerson],
        [select(selectPersonHomeworldId), 7],
        [select(selectPersonStarshipsIds), ["3", "9"]],
        { all: () => throwError(error) },
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPersonDataRequest.type).run();
    expect(result.storeState.people.error).toBeTruthy();
  });

  test("should throw error in case of failure in person details saga worker", async () => {
    const saga = expectSaga(personDetailsSagaWorker)
      .provide([
        [select(selectPersonId), 23],
        [matchers.call.fn(getPerson), throwError(error)],
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPersonDataRequest.type).run();
    expect(result.storeState.people.error).toBeTruthy();
  });

  test("should fire on getPersonDataRequest action", () => {
    testSaga(personDetailsSaga)
      .next()
      .takeLatest(getPersonDataRequest.type, personDetailsSagaWorker)
      .finish()
      .isDone();
  });
});
