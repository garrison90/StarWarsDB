import { createSelector } from "@reduxjs/toolkit";
import { idRegExp } from "../../helpers/helpers";

export const selectPlanet = (state) => state.planets.planet;
export const selectPlanetsLoading = (state) => state.planets.loading;
export const selectPlanetId = (state) => state.planets.id;
export const selectPlanetError = (state) => state.planets.error;
export const selectPlanetResidentsIds = createSelector(
  selectPlanet,
  (planet) => {
    return planet.residents.map((resident) => resident.match(idRegExp)[1]);
  }
);

export const selectPlanetResidents = createSelector(
  selectPlanet,
  (planet) => planet.residents
);
