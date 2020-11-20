import { combineReducers } from "@reduxjs/toolkit";
import peopleReducer from "./peopleSlice";
import planetsReducer from "./planetsReducer";
import starshipsSlice from "./starshipsSlice";
import anotherStarshipsSlice from "./anotherStarshipsSlice";

export default combineReducers({
  starships: starshipsSlice,
  people: peopleReducer,
  planets: planetsReducer,
  another: anotherStarshipsSlice,
});
