import { createSelector } from "@reduxjs/toolkit";
import { idRegExp } from "../../helpers/helpers";

export const selectPerson = (state) => state.people.selectedPerson;
export const selectPeopleLoading = (state) => state.people.loading;
export const selectPeopleError = (state) => state.people.error;
export const selectPersonId = (state) => state.people.id;
export const selectPersonHomeworldId = createSelector(
  selectPerson,
  (person) => {
    return person.homeworld.match(idRegExp)[1];
  }
);

export const selectPersonStarshipsIds = createSelector(
  selectPerson,
  (person) => {
    return person.starships.map((starship) => starship.match(idRegExp)[1]);
  }
);

export const selectPersonStarhips = createSelector(
  selectPerson,
  (person) => person.starships
);

export const selectPersonPlanet = createSelector(
  selectPerson,
  (person) => person.homeworld
);
