import { combineReducers } from "redux";
import peopleReducer from "./peopleSlice";
import planetsReducer from "./planetsReducer";
import starshipsSlice from "./starshipsSlice";

export default combineReducers({
  starships: starshipsSlice,
  people: peopleReducer,
  planets: planetsReducer,
});
