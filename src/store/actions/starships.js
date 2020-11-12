import {
  GET_SEARCH_INPUT_VALUE,
  GET_STARSHIPS_FAILURE,
  GET_STARSHIPS_REQUEST,
  GET_STARSHIPS_SUCCESS,
  GET_STARSHIP_DETAILS_FAILURE,
  GET_STARSHIP_DETAILS_REQUEST,
  GET_STARSHIP_DETAILS_SUCCESS,
  GET_STARSHIP_PILOTS_FAILURE,
  GET_STARSHIP_PILOTS_SUCCESS,
} from "../actionsTypes/starships";

export const getStarshipsRequest = () => {
  return {
    type: GET_STARSHIPS_REQUEST,
  };
};

export const getStarshipsSuccess = (payload) => {
  return {
    type: GET_STARSHIPS_SUCCESS,
    payload: payload,
  };
};

export const getStarshipsFailure = () => {
  return {
    type: GET_STARSHIPS_FAILURE,
  };
};

export const getStarshipDetailsRequest = (id) => {
  return {
    type: GET_STARSHIP_DETAILS_REQUEST,
    payload: id,
  };
};

export const getStarshipDetailsSuccess = (payload) => {
  return {
    type: GET_STARSHIP_DETAILS_SUCCESS,
    payload: payload,
  };
};

export const getStarshipDetailsFailure = () => {
  return {
    type: GET_STARSHIP_DETAILS_FAILURE,
  };
};

export const getStarshipPilotsSuccess = (payload) => {
  return {
    type: GET_STARSHIP_PILOTS_SUCCESS,
    payload: payload,
  };
};

export const getStarshipPilotsFailure = () => {
  return {
    type: GET_STARSHIP_PILOTS_FAILURE,
  };
};

export const getSearchInputValue = (value) => {
  return {
    type: GET_SEARCH_INPUT_VALUE,
    payload: value,
  };
};
