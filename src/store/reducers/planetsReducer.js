import {
  GET_PLANETS_REQUEST,
  GET_PLANETS_REQUEST_FAILURE,
  GET_PLANETS_REQUEST_SUCCESS,
} from "../actionsTypes/planets";

const initialState = {
  planets: [],
};

export default function planetsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_PLANETS_REQUEST:
      return state;
    case GET_PLANETS_REQUEST_SUCCESS:
      return { ...state, planets: payload };
    case GET_PLANETS_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}
