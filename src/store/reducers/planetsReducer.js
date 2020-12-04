import { createReducer } from "@reduxjs/toolkit";
import {
  getPlanetDataRequest,
  getPlanetDataRequestFailure,
  getPlanetDataRequestSuccess,
  getPlanetResidentsSuccess,
} from "../actions/planets";

export const initialState = {
  planet: {},
  loading: true,
  id: "",
  error: false,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getPlanetDataRequest, (state, action) => {
      state.error = false;
      state.loading = true;
      state.id = action.payload;
    })
    .addCase(getPlanetDataRequestSuccess, (state, action) => {
      state.planet = action.payload;
    })
    .addCase(getPlanetResidentsSuccess, (state, action) => {
      state.planet.residents = action.payload;
      state.loading = false;
    })
    .addCase(getPlanetDataRequestFailure, (state, action) => {
      state.error = true;
      state.loading = false;
    });
});
