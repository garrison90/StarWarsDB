import {createSlice} from '@reduxjs/toolkit';

const peopleSlice = createSlice({
  name:'people',
  initialState: {
    people: [],
  },
  reducers: {
      getAllPeopleRequest(state, action){
      },
      getAllPeopleRequestSuccess(state, action){
        state.people = action.payload;
      },
      getAllPeopleRequestFailure(state, action){
      }
  }
})

export const {getAllPeopleRequest, getAllPeopleRequestFailure, getAllPeopleRequestSuccess} = peopleSlice.actions
export default peopleSlice.reducer;
