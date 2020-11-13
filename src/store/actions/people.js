import {
  GET_PERSON_DETAILS_REQUEST,
  GET_PERSON_DETAILS_REQUEST_FAILURE,
  GET_PERSON_DETAILS_REQUEST_SUCCESS,
  GET_PERSON_HOMEWORLD_FAILURE,
  GET_PERSON_HOMEWORLD_SUCCESS,
} from "../actionsTypes/people";

import { createAction } from "@reduxjs/toolkit";

export const getPersonDetailsRequest = (id) => {
  return {
    type: GET_PERSON_DETAILS_REQUEST,
    payload: id,
  };
};

export const getPersonDetailsRequestSuccess = (payload) => {
  return {
    type: GET_PERSON_DETAILS_REQUEST_SUCCESS,
    payload: payload,
  };
};

export const getPersonDetailsRequestFailure = () => {
  return {
    type: GET_PERSON_DETAILS_REQUEST_FAILURE,
  };
};

export const getPersonHomeworldSuccess = (payload) => {
  return {
    type: GET_PERSON_HOMEWORLD_SUCCESS,
    payload: payload,
  };
};

export const getPersonHomeworldFailure = () => {
  return {
    type: GET_PERSON_HOMEWORLD_FAILURE,
  };
};

export const getPeopleDataRequest = createAction("GET_PEOPLE_DATA_REQUEST");
export const getPeopleDataRequestsSuccess = createAction(
  "GET_PEOPLE_DATA_REQUEST_SUCCESS"
);
export const getPeopleDataRequestFailure = createAction(
  "GET_PEOPLE_DATA_REQUEST_FAILURE"
);
