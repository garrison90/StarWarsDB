export const selectStarships = (state) => state.starships.starships;
export const selectStarship = (state) => state.starships.starship;
export const selectStarshipPilots = (state) => state.starships.pilots;
export const selectStarshipsLoading = (state) => state.starships.loading;
export const selectStarshipsError = (state) => state.starships.error;
export const selectHasMore = (state) => !!state.starships.hasMore;
export const selectQuery = (state) => state.starships.query;
export const selectPage = (state) => state.starships.pageNumber;
export const selectStarshipId = (state) => state.starships.id;
