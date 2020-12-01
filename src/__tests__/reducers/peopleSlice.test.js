import {
  fakeId,
  fakePayload,
  fakePerson,
  fakePlanet,
  fakeStarships,
} from "../../helpers/mockData";
import peopleSlice, {
  getPersonDataRequest,
  getPersonDataRequestFailure,
  getPersonDataRequestSuccess,
  getPersonStarshipsAndPlanetFailure,
  getPersonStarshipsAndPlanetRequest,
  getPersonStarshipsAndPlanetSuccess,
  initialState,
} from "../../store/reducers/peopleSlice";

describe("test peopls slice", () => {
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
