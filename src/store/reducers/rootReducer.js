import { combineReducers } from "redux";
import starshipsReducer from "./starshipsReducer";
import peopleReducer from "./peopleSlice";
import planetsReducer from "./planetsReducer";
import residentsReducer from "./residensSlice"

export default combineReducers({
  starships: starshipsReducer,
  people: peopleReducer,
  planets: planetsReducer,
  residents: residentsReducer,
});
