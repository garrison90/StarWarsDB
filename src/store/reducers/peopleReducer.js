import { createReducer } from "@reduxjs/toolkit";
import { getPeopleDataRequest, getPeopleDataRequestsSuccess } from "../actions/people";

const initialState = {
  person: {},
  homeworld: {},
};

export default createReducer(initialState, {
  [getPeopleDataRequest]: function (state) {
    return state
  },
  [getPeopleDataRequestsSuccess]: function (state, action) {
    
  }
});

/* import {
  GET_PERSON_DETAILS_REQUEST,
  GET_PERSON_DETAILS_REQUEST_SUCCESS,
  GET_PERSON_DETAILS_REQUEST_FAILURE,
  GET_PERSON_HOMEWORLD_FAILURE,
  GET_PERSON_HOMEWORLD_SUCCESS,
} from "../actionsTypes/people";

const initialState = {
  person: {},
  homeworld: {},
};

export default function peopleReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PERSON_DETAILS_REQUEST:
      return {
        ...state,
      };
    case GET_PERSON_DETAILS_REQUEST_SUCCESS:
      return {
        ...state,
        person: payload,
      };
    case GET_PERSON_DETAILS_REQUEST_FAILURE:
      return {
        ...state,
      };
    case GET_PERSON_HOMEWORLD_SUCCESS:
      return {
        ...state,
        homeworld: payload,
      };
    case GET_PERSON_HOMEWORLD_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
 */
