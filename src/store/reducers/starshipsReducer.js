import {
  GET_STARSHIPS_FAILURE,
  GET_STARSHIPS_REQUEST,
  GET_STARSHIPS_SUCCESS,
  GET_STARSHIP_DETAILS_FAILURE,
  GET_STARSHIP_DETAILS_REQUEST,
  GET_STARSHIP_DETAILS_SUCCESS,
} from "../actionsTypes/starships";

const initialState = {
  starships: [],
  starship: {},
};

//Обработать ошибки и загрузку

export default function starshipsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_STARSHIPS_REQUEST:
      return state;

    case GET_STARSHIPS_SUCCESS:
      return {
        ...state,
        starships: payload,
      };

    case GET_STARSHIPS_FAILURE:
      return state;

    case GET_STARSHIP_DETAILS_REQUEST:
      return state;

    case GET_STARSHIP_DETAILS_SUCCESS:
      return {
        ...state,
        starship: payload,
      };

    case GET_STARSHIP_DETAILS_FAILURE:
      return state;

    default:
      return state;
  }
}
