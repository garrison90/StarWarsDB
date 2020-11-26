import peopleSlice, {
  getAllPeopleRequest,
  getAllPeopleRequestFailure,
  getAllPeopleRequestSuccess,
  getPersonDataRequest,
  getPersonDataRequestFailure,
  getPersonDataRequestSuccess,
  getPersonStarshipsAndPlanetFailure,
  getPersonStarshipsAndPlanetRequest,
  getPersonStarshipsAndPlanetSuccess,
  initialState,
} from "../../store/reducers/peopleSlice";
import {
  fakePeopleData,
  fakeId,
  fakePerson,
  fakePlanet,
  fakeStarships,
  fakePayload,
} from "../helpers/mockData";

describe("test peopls slice", () => {
  it("get all people data request", () => {
    const newState = peopleSlice(initialState, getAllPeopleRequest());
    expect(newState.error).toBeFalsy();
    expect(newState.loading).toBeTruthy();
  });

  it("get all people data request success", () => {
    const newState = peopleSlice(
      initialState,
      getAllPeopleRequestSuccess(fakePeopleData)
    );

    expect(newState.loading).toBeFalsy();
    expect(newState.people).toEqual(fakePeopleData);
  });

  it("get all people data request failure", () => {
    const newState = peopleSlice(initialState, getAllPeopleRequestFailure());
    expect(newState).toBeTruthy();
    expect(newState.loading).toBeFalsy();
  });

  it("get person details data request", () => {
    const newState = peopleSlice(initialState, getPersonDataRequest(fakeId));

    expect(newState.id).toEqual(fakeId);
    expect(newState.loading).toBeTruthy();
    expect(newState.error).toBeFalsy();
  });

  it("get person details data request success", () => {
    const newState = peopleSlice(
      initialState,
      getPersonDataRequestSuccess(fakePerson)
    );
    expect(newState.selectedPerson).toEqual(fakePerson);
    expect(newState.loading).toBeFalsy();
  });

  it("get person details data request failure", () => {
    const newState = peopleSlice(initialState, getPersonDataRequestFailure());
    expect(newState.error).toBeTruthy();
    expect(newState.loading).toBeFalsy();
  });

  it("get person starships and homeworld request", () => {
    const newState = peopleSlice(
      initialState,
      getPersonStarshipsAndPlanetRequest()
    );

    expect(newState.loading).toBeTruthy();
    expect(newState.error).toBeFalsy();
  });

  it("get person starships and homeworld success", () => {
    const newState = peopleSlice(
      initialState,
      getPersonStarshipsAndPlanetSuccess(fakePayload)
    );

    expect(newState.personHomeworld).toEqual(fakePlanet);
    expect(newState.personStarships).toEqual(fakeStarships);
    expect(newState.loading).toBeFalsy();
  });

  it("get person starships and homeworld  failure", () => {
    const newState = peopleSlice(
      initialState,
      getPersonStarshipsAndPlanetFailure()
    );
    expect(newState.error).toBeTruthy();
    expect(newState.loading).toBeFalsy();
  });
});
