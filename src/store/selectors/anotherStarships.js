export const selectStarships = (state) => state.another.starships;
export const selectLoading = (state) => state.another.loading;
export const selectError = (state) => state.another.error;
export const selectHasMore = (state) => !!state.another.hasMore;
export const selectQuery = (state) => state.another.query;
export const selectPage = (state) => state.another.pageNumber;
