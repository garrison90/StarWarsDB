import starshipSlice, {
  getStarshipDetailsFailure,
  getStarshipDetailsRequest,
  getStarshipDetailsSuccess,
  initialState,
} from "../../reducers/starshipSlice";
import {
  fakeId,
  fakePeopleData,
  fakeStarship,
} from "../../../helpers/mockData";
import { getStarshipPilotsSuccess } from "../starshipSlice";

describe("test starships slice", () => {
  it("should put starship id to state", () => {
    const newState = starshipSlice(
      initialState,
      getStarshipDetailsRequest(fakeId)
    );
    expect(newState.error).toBeFalsy();
    expect(newState.loading).toBeTruthy();
    expect(newState.id).toBe(fakeId);
  });

  it("should put starship details data to state", () => {
    const newState = starshipSlice(
      initialState,
      getStarshipDetailsSuccess(fakeStarship)
    );

    expect(newState.starship).toEqual(fakeStarship);
  });

  it("should put starship pilots data to state", () => {
    const newState = starshipSlice(
      initialState,
      getStarshipPilotsSuccess(fakePeopleData)
    );
    expect(newState.starshipPilots).toEqual(fakePeopleData);
    expect(newState.loading).toBeFalsy();
  });

  it("should change error property on true in case of failure request", () => {
    const newState = starshipSlice(initialState, getStarshipDetailsFailure());
    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBeTruthy();
  });
});
