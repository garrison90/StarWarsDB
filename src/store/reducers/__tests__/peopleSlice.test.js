import peopleSlice, {
  getPersonDataRequest,
  getPersonDataRequestFailure,
  getPersonDataRequestSuccess,
  getPersonStarshipsAndPlanetSuccess,
  initialState,
} from "../../reducers/peopleSlice";
import {
  fakeId,
  fakePayload,
  fakePerson,
  fakePlanet,
  fakeStarships,
} from "../../../helpers/mockData";

describe("test peopls slice", () => {
  it("should put person id to state", () => {
    const newState = peopleSlice(initialState, getPersonDataRequest(fakeId));

    expect(newState.id).toEqual(fakeId);
    expect(newState.loading).toBeTruthy();
    expect(newState.error).toBeFalsy();
  });

  it("should put person details data in case of success", () => {
    const newState = peopleSlice(
      initialState,
      getPersonDataRequestSuccess(fakePerson)
    );
    expect(newState.selectedPerson).toEqual(fakePerson);
  });

  it("should change error property in case of failure one of requests", () => {
    const newState = peopleSlice(initialState, getPersonDataRequestFailure());
    expect(newState.error).toBeTruthy();
    expect(newState.loading).toBeFalsy();
  });

  it("should put person starships and person homeworld data to state", () => {
    const newState = peopleSlice(
      initialState,
      getPersonStarshipsAndPlanetSuccess(fakePayload)
    );

    expect(newState.personHomeworld).toEqual(fakePlanet);
    expect(newState.personStarships).toEqual(fakeStarships);
    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBeFalsy();
  });
});
