import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { select } from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { getPerson } from "../../services/people-service";
import {
  getPersonDataRequest,
  getPersonDataRequestSuccess,
  initialState as peopleState,
} from "../../store/reducers/peopleSlice";
import rootReducer from "../../store/reducers/rootReducer";
import {
  personDetailsSagaWorker,
  personStarshipsAndPlanetSagaWorker,
} from "../../store/sagas/personDetailsSaga";
import {
  selectPersonHomeworldId,
  selectPersonId,
  selectPersonStarshipsIds,
} from "../../store/selectors/people";
import { fakePerson, fakePlanet, fakeStarships } from "../helpers/mockData";

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
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPersonDataRequest.type).run();
    expect(result.storeState.people.selectedPerson).toStrictEqual(fakePerson);
  });

  test("should load person starships and person homeworld in case of success", async () => {
    const saga = expectSaga(personStarshipsAndPlanetSagaWorker)
      .provide([
        [select(selectPersonHomeworldId), 17],
        [select(selectPersonStarshipsIds), [1, 7, 9]],
        { all: () => [fakeStarships, fakePlanet] },
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPersonDataRequestSuccess.type).run();
    expect(result.storeState.people.personHomeworld).toStrictEqual(fakePlanet);
    expect(result.storeState.people.personStarships).toStrictEqual(
      fakeStarships
    );
  });

  test("should throw error in case of failure in person starships and planet saga worker", async () => {
    const saga = expectSaga(personStarshipsAndPlanetSagaWorker)
      .provide([
        [select(selectPersonHomeworldId), 17],
        [select(selectPersonStarshipsIds), [1, 7, 9]],
        { all: () => throwError(error) },
      ])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getPersonDataRequestSuccess.type).run();
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
});
