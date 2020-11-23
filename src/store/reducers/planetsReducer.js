import { createReducer } from "@reduxjs/toolkit";
import {
  getPlanetDataRequest,
  getPlanetDataRequestFailure,
  getPlanetDataRequestSuccess,
  getPlanetsDataRequest,
  getPlanetsDataRequestFailure,
  getPlanetsDataRequestSuccess,
} from "../actions/planets";

export const initialState = {
  planets: [],
  planet: {},
  residents: [],
  loading: true,
  id: "",
  error: false,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getPlanetsDataRequest, (state, action) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(getPlanetsDataRequestSuccess, (state, action) => {
      state.planets = action.payload;
      state.loading = false;
    })
    .addCase(getPlanetsDataRequestFailure, (state, action) => {
      state.loading = false;
      state.error = true;
    })
    .addCase(getPlanetDataRequest, (state, action) => {
      state.error = false;
      state.loading = true;
      state.id = action.payload;
    })
    .addCase(getPlanetDataRequestSuccess, (state, action) => {
      state.planet = action.payload.planet;
      state.residents = action.payload.residents;
      state.loading = false;
    })
    .addCase(getPlanetDataRequestFailure, (state, action) => {
      state.error = true;
      state.loading = false;
    });
});
