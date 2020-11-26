import starshipsSlice, {
  clearStarships,
  getStarshipDetailsFailure,
  getStarshipDetailsRequest,
  getStarshipDetailsSuccess,
  initialState,
  setPageNumber,
  setQuery,
} from "../../store/reducers/starshipsSlice";
import {
  getStarshipsRequest,
  getStarshipsSuccess,
  getStarshipsFailure,
} from "../../store/reducers/starshipsSlice";
import {
  fakeId,
  fakePayload,
  fakeStarship,
  fakeStarships,
} from "../helpers/mockData";

describe("test starships slice", () => {
  it("get starships data request", () => {
    const newState = starshipsSlice(initialState, getStarshipsRequest());
    expect(newState.error).toBeFalsy();
    expect(newState.loading).toBeTruthy();
  });

  it("get starships data request success", () => {
    const newState = starshipsSlice(
      initialState,
      getStarshipsSuccess(fakePayload)
    );
    expect(newState.starships).toEqual(fakeStarships);
    expect(newState.hasMore).toBe(true);
    expect(newState.loading).toBeFalsy();
  });

  it("if there any more data on the server", () => {
    const state = starshipsSlice(
      initialState,
      getStarshipsSuccess({ starships: fakeStarships, next: true })
    );

    const newState = starshipsSlice(
      state,
      getStarshipsSuccess({ starships: fakeStarships, next: null })
    );

    expect(newState.starships).toEqual([...fakeStarships, ...fakeStarships]);
    expect(newState.hasMore).toBeFalsy();
    expect(newState.loading).toBeFalsy();
  });

  it("get starships data request failure", () => {
    const newState = starshipsSlice(initialState, getStarshipsFailure());
    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBeTruthy();
  });

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

  it("set new page number", () => {
    const newState = starshipsSlice(initialState, setPageNumber());
    expect(newState.pageNumber).toEqual(initialState.pageNumber + 1);
  });

  it("set value from input field", () => {
    const newState = starshipsSlice(initialState, setQuery("h"));
    expect(newState.pageNumber).toBe(1);
    expect(newState.starships).toEqual([]);
    expect(newState.query).toEqual("h");
  });

  it("clear starships data", () => {
    expect(starshipsSlice(initialState, clearStarships())).toEqual(
      initialState
    );
  });
});
