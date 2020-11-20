import { createSlice } from "@reduxjs/toolkit";

const starshipsSlice = createSlice({
  name: "starships",
  initialState: {
    starships: [],
    starship: {},
    pilots: [],
    search: "",
    loading: true,
  },
  reducers: {
    getStarshipsRequest(state, action) {
      state.loading = true;
    },
    getStarshipsSuccess(state, action) {
      state.starships = action.payload.starships;
      state.loading = false;
    },
    getStarshipsFailure(state, action) {},
    getStarshipDetailsRequest(state, action) {
      state.loading = true;
    },
    getStarshipDetailsSuccess(state, action) {
      state.starship = action.payload.starship;
      state.pilots = action.payload.pilots;
      state.loading = false;
    },
    getStarshipDetailsFailure(state, action) {},
    getSearchInputValue(state, action) {
      state.search = action.payload;
    },
    setSearchValueFromUrl(state, action) {
      state.search = action.payload;
    },
  },
});

export const {
  getStarshipsRequest,
  getStarshipsSuccess,
  getStarshipsFailure,
  getStarshipDetailsRequest,
  getStarshipDetailsSuccess,
  getStarshipDetailsFailure,
  getSearchInputValue,
  setSearchValueFromUrl,
} = starshipsSlice.actions;
export default starshipsSlice.reducer;
