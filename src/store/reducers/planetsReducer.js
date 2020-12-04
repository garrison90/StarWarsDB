import { createReducer } from "@reduxjs/toolkit";
import {
  getPlanetDataRequest,
  getPlanetDataRequestFailure,
  getPlanetDataRequestSuccess,
  getPlanetResidentsRequest,
  getPlanetResidentsSuccess,
  getPlanetResidentsFailure,
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
      state.planet.residents = action.payload;
      state.loading = false;
    })
    .addCase(getPlanetResidentsFailure, (state, action) => {
      state.loading = false;
      state.error = true;
    });
});
