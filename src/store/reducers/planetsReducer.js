import { createReducer } from "@reduxjs/toolkit";
import {
  getPlanetDataRequest,
  getPlanetDataRequestFailure,
  getPlanetDataRequestSuccess,
  getPlanetsDataRequest,
  getPlanetsDataRequestFailure,
  getPlanetsDataRequestSuccess,
  getPlanetResidentsRequest,
  getPlanetResidentsSuccess,
  getPlanetResidentsFailure,
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
      state.planet = action.payload;
      state.loading = false;
    })
    .addCase(getPlanetDataRequestFailure, (state, action) => {
      state.error = true;
      state.loading = false;
    })
    .addCase(getPlanetResidentsRequest, (state, action) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(getPlanetResidentsSuccess, (state, action) => {
      state.residents = action.payload;
      state.loading = false;
    })
    .addCase(getPlanetResidentsFailure, (state, action) => {
      state.loading = false;
      state.error = true;
    });
});
