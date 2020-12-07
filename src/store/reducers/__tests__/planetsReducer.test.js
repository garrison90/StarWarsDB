import { fakePeopleData, fakePlanet } from "../../../helpers/mockData";
import {
  getPlanetDataRequest,
  getPlanetDataRequestSuccess,
  getPlanetDataRequestFailure,
  getPlanetResidentsSuccess,
} from "../../actions/planets";
import planetsReducer, { initialState } from "../planetsReducer";

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
  });

  it("get planet details request error", () => {
    const newState = planetsReducer(
      initialState,
      getPlanetDataRequestFailure()
    );
    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBeTruthy();
  });

  it("get planet residents success", () => {
    const newState = planetsReducer(
      initialState,
      getPlanetResidentsSuccess(fakePeopleData)
    );

    expect(newState.planetResidents).toEqual(fakePeopleData);
    expect(newState.loading).toBeFalsy();
  });
});
