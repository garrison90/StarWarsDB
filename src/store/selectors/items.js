export const selectItems = (state) => state.items.items;
export const selectItemsLoading = (state) => state.items.loading;
export const selectItemsError = (state) => state.items.error;
export const selectHasMore = (state) => state.items.hasMore;
export const selectQuery = (state) => state.items.query;
export const selectPage = (state) => state.items.pageNumber;
