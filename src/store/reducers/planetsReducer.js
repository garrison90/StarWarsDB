import { createAction, createReducer } from '@reduxjs/toolkit'

export const getPlanetsDataRequest = createAction('planets/getPlanetsDataRequest'); 
export const getPlanetsDataRequestSuccess = createAction('planets/getPlanetsDataRequestSuccess');
export const getPlanetsDataRequestFailure = createAction('planets/getPlanetsDataRequestFailure');

export const getPlanetDataRequest = createAction('planets/getPlanetDataRequest'); 
export const getPlanetDataRequestSuccess = createAction('planets/getPlanetDataRequestSuccess');
export const getPlanetDataRequestFailure = createAction('planets/getPlanetDataRequestFailure');

export const getResidentsRequestSuccess = createAction('planets/getResidentsRequestSuccess')

export const getResidentsRequestFailure = createAction('planets/getResidentsRequestFailure')


const initialState = {
  planets: [],
  planet: {},
  residents: []
};

export default createReducer(initialState,(builder)=>{
  builder
  .addCase(getPlanetsDataRequest,(state,action)=>{
    return state
  })
  .addCase(getPlanetsDataRequestSuccess,(state,action)=>{
    state.planets = action.payload
  })
  .addCase(getPlanetsDataRequestFailure,(state,action)=>{
    return state
  })
  .addCase(getPlanetDataRequest,(state,action)=>{
    return state
  })
  .addCase(getPlanetDataRequestSuccess,(state,action)=>{
    state.planet = action.payload
  })
  .addCase(getPlanetDataRequestFailure,(state,action)=>{
    return state
  })
  .addCase(getResidentsRequestSuccess,(state,action)=>{
    state.residents = action.payload
  })
  .addCase(getResidentsRequestFailure,(state,action)=>{
    return state
  })
})
