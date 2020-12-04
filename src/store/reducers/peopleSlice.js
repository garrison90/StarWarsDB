import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  selectedPerson: {},
  loading: false,
  error: false,
  id: "",
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    getPersonDataRequest(state, action) {
      state.loading = true;
      state.id = action.payload;
      state.error = false;
    },
    getPersonDataRequestSuccess(state, action) {
      state.selectedPerson = action.payload;
      state.loading = false;
    },
    getPersonDataRequestFailure(state, action) {
      state.loading = false;
      state.error = true;
    },
    getPersonStarshipsAndPlanetRequest(state, action) {
      state.loading = true;
      state.error = false;
    },
    getPersonStarshipsAndPlanetSuccess(state, action) {
      state.selectedPerson.homeworld = action.payload.planet;
      state.selectedPerson.starships = action.payload.starships;
      state.loading = false;
    },
    getPersonStarshipsAndPlanetFailure(state, action) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  getPersonDataRequestFailure,
  getPersonDataRequestSuccess,
  getPersonDataRequest,
  getPersonStarshipsAndPlanetRequest,
  getPersonStarshipsAndPlanetSuccess,
  getPersonStarshipsAndPlanetFailure,
} = peopleSlice.actions;
export default peopleSlice.reducer;
