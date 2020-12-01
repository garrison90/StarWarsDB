import { fakeStarships } from "../../helpers/mockData";
import itemsSlice, {
  clearItems,
  getAllPeopleRequest,
  getItemsRequestFailure,
  getItemsRequestSuccess,
  getPlanetsDataRequest,
  getStarshipsRequest,
  initialState,
  setPageNumber,
  setQuery,
} from "../../store/reducers/itemsSlice";

describe("items slice test", () => {
  it("get all people items data request", () => {
    const newState = itemsSlice(initialState, getAllPeopleRequest());
    expect(newState.error).toBeFalsy();
    expect(newState.loading).toBeTruthy();
  });

  it("get all planet items data request", () => {
    const newState = itemsSlice(initialState, getPlanetsDataRequest());
    expect(newState.error).toBeFalsy();
    expect(newState.loading).toBeTruthy();
  });

  it("get all starships items data request", () => {
    const newState = itemsSlice(initialState, getStarshipsRequest());
    expect(newState.error).toBeFalsy();
    expect(newState.loading).toBeTruthy();
  });

  it("get items data request success", () => {
    const newState = itemsSlice(
      initialState,
      getItemsRequestSuccess({ items: fakeStarships, next: true })
    );
    expect(newState.items).toEqual(fakeStarships);
    expect(newState.hasMore).toBe(true);
    expect(newState.loading).toBeFalsy();
  });

  it("if there any more data on the server", () => {
    const state = itemsSlice(
      initialState,
      getItemsRequestSuccess({ items: fakeStarships, next: true })
    );

    const newState = itemsSlice(
      state,
      getItemsRequestSuccess({ items: fakeStarships, next: null })
    );

    expect(newState.items).toEqual([...fakeStarships, ...fakeStarships]);
    expect(newState.hasMore).toBeFalsy();
    expect(newState.loading).toBeFalsy();
  });

  it("get starships data request failure", () => {
    const newState = itemsSlice(initialState, getItemsRequestFailure());
    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBeTruthy();
  });

  it("set new page number", () => {
    const newState = itemsSlice(initialState, setPageNumber());
    expect(newState.pageNumber).toEqual(initialState.pageNumber + 1);
  });

  it("set value from input field", () => {
    const newState = itemsSlice(initialState, setQuery("h"));
    expect(newState.pageNumber).toBe(1);
    expect(newState.items).toEqual([]);
    expect(newState.query).toEqual("h");
  });

  it("clear starships data", () => {
    expect(itemsSlice(initialState, clearItems())).toEqual(initialState);
  });
});
