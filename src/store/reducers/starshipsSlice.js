import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  starship: {},
  pilots: [],
  loading: true,
  error: false,
};

const starshipsSlice = createSlice({
  name: "starships",
  initialState,
  reducers: {
    getStarshipDetailsRequest(state, action) {
      state.loading = true;
      state.id = action.payload;
      state.error = false;
    },
    getStarshipDetailsSuccess(state, action) {
      state.starship = action.payload;
      state.loading = false;
    },
    getStarshipDetailsFailure(state, action) {
      state.loading = false;
      state.error = true;
    },

    getStarshipPilotsRequest(state, action) {
      state.loading = true;
      state.error = false;
    },

    getStarshipPilotsSuccess(state, action) {
      state.loading = false;
      state.pilots = action.payload;
    },

    getStarshipPilotsFailure(state, action) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  getStarshipDetailsRequest,
  getStarshipDetailsSuccess,
  getStarshipDetailsFailure,
  getStarshipPilotsRequest,
  getStarshipPilotsSuccess,
  getStarshipPilotsFailure,
} = starshipsSlice.actions;
export default starshipsSlice.reducer;
