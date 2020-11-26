import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  people: [],
  selectedPerson: {},
  personHomeworld: {},
  personStarships: [],
  loading: true,
  error: false,
  id: "",
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    getAllPeopleRequest(state, action) {
      state.loading = true;
      state.error = false;
    },
    getAllPeopleRequestSuccess(state, action) {
      state.people = action.payload;
      state.loading = false;
    },
    getAllPeopleRequestFailure(state, action) {
      state.error = true;
      state.loading = false;
    },
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
      state.personHomeworld = action.payload.planet;
      state.personStarships = action.payload.starships;
      state.loading = false;
    },
    getPersonStarshipsAndPlanetFailure(state, action) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  getAllPeopleRequest,
  getAllPeopleRequestFailure,
  getAllPeopleRequestSuccess,
  getPersonDataRequestFailure,
  getPersonDataRequestSuccess,
  getPersonDataRequest,
  getPersonStarshipsAndPlanetRequest,
  getPersonStarshipsAndPlanetSuccess,
  getPersonStarshipsAndPlanetFailure,
} = peopleSlice.actions;
export default peopleSlice.reducer;
