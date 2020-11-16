import { createReducer } from "@reduxjs/toolkit";
import {
  getPlanetDataRequest,
  getPlanetDataRequestFailure,
  getPlanetDataRequestSuccess,
  getPlanetsDataRequest,
  getPlanetsDataRequestFailure,
  getPlanetsDataRequestSuccess,
} from "../actions/planets";

const initialState = {
  planets: [],
  planet: {},
  residents: [],
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getPlanetsDataRequest, (state, action) => {
      return state;
    })
    .addCase(getPlanetsDataRequestSuccess, (state, action) => {
      state.planets = action.payload;
    })
    .addCase(getPlanetsDataRequestFailure, (state, action) => {
      return state;
    })
    .addCase(getPlanetDataRequest, (state, action) => {
      return state;
    })
    .addCase(getPlanetDataRequestSuccess, (state, action) => {
      state.planet = action.payload.planet;
      state.residents = action.payload.residents;
    })
    .addCase(getPlanetDataRequestFailure, (state, action) => {
      return state;
    });
});
