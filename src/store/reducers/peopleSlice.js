import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    selectedPerson: {},
    personHomeworld: {},
    personStarships: [],
    loading: true,
    error: false,
  },
  reducers: {
    getAllPeopleRequest(state, action) {
      state.loading = true;
    },
    getAllPeopleRequestSuccess(state, action) {
      state.people = action.payload;
      state.loading = false;
    },
    getAllPeopleRequestFailure(state, action) {
      state.error = true;
    },
    getPersonDataRequest(state, action) {
      state.loading = true;
    },
    getPersonDataRequestSuccess(state, action) {
      state.selectedPerson = action.payload.person;
      state.personHomeworld = action.payload.planet;
      state.personStarships = action.payload.starships;
      state.loading = false;
    },
    getPersonDataRequestFailure(state, action) {},
  },
});

export const {
  getAllPeopleRequest,
  getAllPeopleRequestFailure,
  getAllPeopleRequestSuccess,
  getPersonDataRequestFailure,
  getPersonDataRequestSuccess,
  getPersonDataRequest,
} = peopleSlice.actions;
export default peopleSlice.reducer;
