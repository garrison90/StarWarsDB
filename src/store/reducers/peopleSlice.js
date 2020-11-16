import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    selectedPerson: {},
    personHomeworld: {},
    personStarships: [],
  },
  reducers: {
    getAllPeopleRequest(state, action) {},
    getAllPeopleRequestSuccess(state, action) {
      state.people = action.payload;
    },
    getAllPeopleRequestFailure(state, action) {},
    getPersonDataRequest(state, action) {},
    getPersonDataRequestSuccess(state, action) {
      state.selectedPerson = action.payload.person;
      state.personHomeworld = action.payload.planet;
      state.personStarships = action.payload.starships;
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
