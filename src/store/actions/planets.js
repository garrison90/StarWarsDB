import {
  GET_PLANETS_REQUEST,
  GET_PLANETS_REQUEST_FAILURE,
  GET_PLANETS_REQUEST_SUCCESS,
} from "../actionsTypes/planets";

export const getPlanetsRequest = () => {
  return {
    type: GET_PLANETS_REQUEST,
  };
};

export const getPlanetsRequestSuccess = (payload) => {
  return {
    type: GET_PLANETS_REQUEST_SUCCESS,
    payload: payload,
  };
};

export const getPlanetsRequestFailure = () => {
  return {
    type: GET_PLANETS_REQUEST_FAILURE,
  };
};
