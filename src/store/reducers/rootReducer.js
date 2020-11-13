import { combineReducers } from "redux";
import starshipsReducer from "./starshipsReducer";
import peopleReducer from "./peopleReducer";
import planetsReducer from "./planetsReducer";

export default combineReducers({
  starships: starshipsReducer,
  people: peopleReducer,
  planets: planetsReducer,
});
