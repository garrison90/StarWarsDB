import { combineReducers } from "redux";
import starshipsReducer from "./starshipsReducer";

export default combineReducers({ starships: starshipsReducer });
