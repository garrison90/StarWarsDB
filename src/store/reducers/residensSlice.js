import {createSlice} from '@reduxjs/toolkit';

const residentsSlice = createSlice({
  name:'residents',
  initialState: {
    residents: [],
  },
  reducers: {
      getResidentsRequest(state, action){
      },
      getResidentsRequestSuccess(state, action){
        state.residents = action.payload;
      },
      getResidentsRequestFailure(state, action){
      }
  }
})

export const {getResidentsRequest, getResidentsRequestSuccess, getResidentsRequestFailure} = residentsSlice.actions
export default residentsSlice.reducer;
