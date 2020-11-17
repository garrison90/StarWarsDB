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
  loading: true,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getPlanetsDataRequest, (state, action) => {})
    .addCase(getPlanetsDataRequestSuccess, (state, action) => {
      state.planets = action.payload;
      state.loading = false;
    })
    .addCase(getPlanetsDataRequestFailure, (state, action) => {
      return state;
    })
    .addCase(getPlanetDataRequest, (state, action) => {
      state.loading = true;
    })
    .addCase(getPlanetDataRequestSuccess, (state, action) => {
      state.planet = action.payload.planet;
      state.residents = action.payload.residents;
      state.loading = false;
    })
    .addCase(getPlanetDataRequestFailure, (state, action) => {
      return state;
    });
});
