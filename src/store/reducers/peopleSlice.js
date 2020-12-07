import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  selectedPerson: {},
  personHomeworld: {},
  personStarships: [],
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
    },
    getPersonStarshipsAndPlanetSuccess(state, action) {
      state.personHomeworld = action.payload.planet;
      state.personStarships = action.payload.starships;
      state.loading = false;
    },
    getPersonDataRequestFailure(state, action) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  getPersonDataRequestFailure,
  getPersonDataRequestSuccess,
  getPersonDataRequest,
  getPersonStarshipsAndPlanetSuccess,
} = peopleSlice.actions;
export default peopleSlice.reducer;
