import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { mockPeopleData } from "../helpers/mockData";
import { peopleSagaWorker } from "../../store/sagas/peopleSaga";
import { getAllPeopleRequest } from "../../store/reducers/peopleSlice";
import { initialState as peopleState } from "../../store/reducers/peopleSlice";
import { getAllPeople } from "../../services/people-service";
import rootReducer from "../../store/reducers/rootReducer";
import { throwError } from "redux-saga-test-plan/providers";

describe("people saga test", () => {
  const initialState = {
    people: peopleState,
  };
  const error = new Error("error");

  test("should load people data in case of success", async () => {
    const saga = expectSaga(peopleSagaWorker)
      .provide([[matchers.call.fn(getAllPeople), mockPeopleData]])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getAllPeopleRequest.type).run();
    expect(result.storeState.people.people).toStrictEqual(mockPeopleData);
  });

  test("should throw error in case of failure", async () => {
    const saga = expectSaga(peopleSagaWorker)
      .provide([[matchers.call.fn(getAllPeople), throwError(error)]])
      .withReducer(rootReducer, initialState);
    const result = await saga.dispatch(getAllPeopleRequest.type).run();
    expect(result.storeState.people.error).toBeTruthy();
  });
});
