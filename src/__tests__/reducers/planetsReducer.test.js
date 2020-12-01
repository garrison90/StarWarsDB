import { fakePeopleData, fakePlanet } from "../../helpers/mockData";
import {
  getPlanetDataRequest,
  getPlanetDataRequestSuccess,
  getPlanetDataRequestFailure,
  getPlanetResidentsRequest,
  getPlanetResidentsSuccess,
  getPlanetResidentsFailure,
} from "../../store/actions/planets";
import planetsReducer, {
  initialState,
} from "../../store/reducers/planetsReducer";

describe("test planets reducer", () => {
  it("get planet details request", () => {
    const mockId = 5;
    const newState = planetsReducer(initialState, getPlanetDataRequest(mockId));
    expect(newState.loading).toBeTruthy();
    expect(newState.error).toBeFalsy();
    expect(newState.id).toEqual(mockId);
  });

  it("get planet details request success", () => {
    const newState = planetsReducer(
      initialState,
      getPlanetDataRequestSuccess(fakePlanet)
    );

    expect(newState.planet).toEqual(fakePlanet);
    expect(newState.loading).toBeFalsy();
  });

  it("get planet details request error", () => {
    const newState = planetsReducer(
      initialState,
      getPlanetDataRequestFailure()
    );
    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBe(true);
  });

  it("get planet residents request", () => {
    const newState = planetsReducer(initialState, getPlanetResidentsRequest());
    expect(newState.loading).toBeTruthy();
    expect(newState.error).toBeFalsy();
  });

  it("get planet residents success", () => {
    const newState = planetsReducer(
      initialState,
      getPlanetResidentsSuccess(fakePeopleData)
    );

    expect(newState.residents).toEqual(fakePeopleData);
    expect(newState.loading).toBeFalsy();
  });

  it("get planet residents failure", () => {
    const newState = planetsReducer(initialState, getPlanetResidentsFailure());
    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBe(true);
  });
});
