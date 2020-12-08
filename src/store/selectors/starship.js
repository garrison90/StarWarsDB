import { createSelector } from "@reduxjs/toolkit";
import { idRegExp } from "helpers/helpers";

export const selectStarshipId = (state) => state.starship.id;
export const selectStarship = (state) => state.starship.starship;
export const selectStarshipError = (state) => state.starship.error;
export const selectStarshipLoading = (state) => state.starship.loading;
export const selectStarshipPilots = (state) => state.starship.starshipPilots;
export const selectPilotsIds = createSelector(selectStarship, (starship) =>
  starship.pilots.map((pilot) => pilot.match(idRegExp)[1])
);
