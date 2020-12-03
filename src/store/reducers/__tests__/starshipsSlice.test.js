import starshipsSlice, {
  getStarshipDetailsFailure,
  getStarshipDetailsRequest,
  getStarshipDetailsSuccess,
  initialState,
} from "../../reducers/starshipsSlice";
import { fakeId, fakeStarship } from "../../../helpers/mockData";

describe("test starships slice", () => {
  it("get starship details data request", () => {
    const newState = starshipsSlice(
      initialState,
      getStarshipDetailsRequest(fakeId)
    );
    expect(newState.id).toBe(fakeId);
    expect(newState.loading).toBeTruthy();
    expect(newState.error).toBeFalsy();
  });

  it("get starship details data request success", () => {
    const newState = starshipsSlice(
      initialState,
      getStarshipDetailsSuccess(fakeStarship)
    );

    expect(newState.loading).toBeFalsy();
    expect(newState.starship).toEqual(fakeStarship);
  });

  it("get starship details request failure", () => {
    const newState = starshipsSlice(initialState, getStarshipDetailsFailure());
    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBeTruthy();
  });
});
