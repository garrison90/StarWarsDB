import { combineReducers } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import peopleReducer from "./peopleSlice";
import planetsReducer from "./planetsReducer";
import starshipSlice from "./starshipSlice";

export default combineReducers({
  starship: starshipSlice,
  people: peopleReducer,
  planets: planetsReducer,
  items: itemsSlice,
});
