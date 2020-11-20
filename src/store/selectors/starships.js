/* import { createSelector } from "@reduxjs/toolkit";
import { pageNumberRegExp } from "../../helpers/helpers"; */

export const selectStarships = (state) => state.starships.starships;
export const selectStarship = (state) => state.starships.starship;
export const selectStarshipPilots = (state) => state.starships.pilots;
export const selectLoading = (state) => state.starships.loading;
export const selectError = (state) => state.starships.error;
export const selectHasMore = (state) => !!state.starships.hasMore;
export const selectQuery = (state) => state.starships.query;
export const selectPage = (state) => state.starships.pageNumber;

/* export const selectCount = (state) => state.starships.count; */

/* export const selectNextPage = (state) => {
  let page = state.starships.next;
  let id = page.match(pageNumberRegExp)[1];
  return `/?page=${id}`;
}; */

/* export const selectNextPage = (state) => state.starships.next; */

/* export const selectQueryParams = createSelector(selectValue, (search) => {
  let d = search ? `/?search=${search}` : "";
  return d;
});
 */
