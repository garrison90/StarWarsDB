import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  starship: {},
  id: "",
  error: false,
  loading: false,
};

const starshipSlice = createSlice({
  name: "starship",
  initialState,
  reducers: {
    getStarshipDetailsRequest(state, action) {
      state.loading = true;
      state.error = false;
      state.id = action.payload;
    },
    getStarshipDetailsSuccess(state, action) {
      state.starship = action.payload;
    },
    getStarshipPilotsSuccess(state, action) {
      state.starship.pilots = action.payload;
      state.loading = false;
    },
    getStarshipDetailsFailure(state, action) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  getStarshipDetailsRequest,
  getStarshipDetailsSuccess,
  getStarshipDetailsFailure,
  getStarshipPilotsSuccess,
} = starshipSlice.actions;
export default starshipSlice.reducer;