import { runSaga } from "redux-saga";
import * as api from "../../services/people-service";
import { mockPeopleData } from "../helpers/mockData";
import { peopleSagaWorker } from "../../store/sagas/peopleSaga";
import {
  getAllPeopleRequestFailure,
  getAllPeopleRequestSuccess,
} from "../../store/reducers/peopleSlice";

test("should load people data in case of success", async () => {
  const dispatchedActions = [];
  api.getAllPeople = jest.fn(() => Promise.resolve(mockPeopleData));

  const fakeStore = {
    dispatch: (action) => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, peopleSagaWorker).done;
  expect(api.getAllPeople.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(
    getAllPeopleRequestSuccess(mockPeopleData)
  );
});

test("should handle error in case of failure", async () => {
  const dispatchedActions = [];
  api.getAllPeople = jest.fn(() => Promise.reject());

  const fakeStore = {
    dispatch: (action) => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, peopleSagaWorker).done;
  expect(api.getAllPeople.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(getAllPeopleRequestFailure());
});
