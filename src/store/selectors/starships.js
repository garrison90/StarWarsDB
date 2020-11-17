import { createSelector } from "@reduxjs/toolkit";

export const selectStarships = (state) => state.starships.starships;
export const selectStarship = (state) => state.starships.starship;
export const selectStarshipPilots = (state) => state.starships.pilots;
export const selectValue = (state) => state.starships.search;
export const selectStarshipsLoading = (state) => state.starships.loading;

export const selectQueryParams = createSelector(selectValue, (search) => {
  return search ? `/?search=${search}` : "";
});
