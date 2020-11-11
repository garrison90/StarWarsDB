import {
  GET_STARSHIPS_FAILURE,
  GET_STARSHIPS_REQUEST,
  GET_STARSHIPS_SUCCESS,
  GET_STARSHIP_DETAILS_FAILURE,
  GET_STARSHIP_DETAILS_REQUEST,
  GET_STARSHIP_DETAILS_SUCCESS,
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
