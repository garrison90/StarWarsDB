import { fakeStarships } from "../../../helpers/mockData";
import {
  selectHasMore,
  selectItems,
  selectItemsError,
  selectItemsLoading,
  selectPage,
  selectQuery,
} from "../items";

describe("items selectors test", () => {
  let state = {
    items: {
      items: fakeStarships,
      loading: true,
      error: false,
      hasMore: true,
      pageNumber: 3,
      query: "res",
    },
  };

  it("should return items data", () => {
    expect(selectItems(state)).toEqual(fakeStarships);
    expect(selectItemsLoading(state)).toEqual(true);
    expect(selectItemsError(state)).toEqual(false);
    expect(selectHasMore(state)).toEqual(true);
    expect(selectQuery(state)).toEqual("res");
    expect(selectPage(state)).toEqual(3);
  });
});
