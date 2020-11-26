import { createAction } from "@reduxjs/toolkit";

export const getPlanetsDataRequest = createAction(
  "planets/getPlanetsDataRequest"
);
export const getPlanetsDataRequestSuccess = createAction(
  "planets/getPlanetsDataRequestSuccess"
);
export const getPlanetsDataRequestFailure = createAction(
  "planets/getPlanetsDataRequestFailure"
);

export const getPlanetDataRequest = createAction(
  "planets/getPlanetDataRequest"
);
export const getPlanetDataRequestSuccess = createAction(
  "planets/getPlanetDataRequestSuccess"
);
export const getPlanetDataRequestFailure = createAction(
  "planets/getPlanetDataRequestFailure"
);

export const getPlanetResidentsRequest = createAction(
  "planets/getPlanetResidentsRequest"
);

export const getPlanetResidentsSuccess = createAction(
  "planets/getPlanetResidentsSuccess"
);

export const getPlanetResidentsFailure = createAction(
  "planets/getPlanetResidentsFailure"
);
