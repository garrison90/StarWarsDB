import { createSlice } from "@reduxjs/toolkit";

const starshipsSlice = createSlice({
  name: "starships",
  initialState: {
    starships: [],
    starship: {},
    pilots: [],
    search: "",
  },
  reducers: {
    getStarshipsRequest(state, action) {},
    getStarshipsSuccess(state, action) {
      state.starships = action.payload;
    },
    getStarshipsFailure(state, action) {},
    getStarshipDetailsRequest(state, action) {},
    getStarshipDetailsSuccess(state, action) {
      state.starship = action.payload.starship;
      state.pilots = action.payload.pilots;
    },
    getStarshipDetailsFailure(state, action) {},
    getSearchInputValue(state, action) {
      state.search = action.payload;
    },
    setSearchValueFromUrl(state, action) {
      console.log("url value", action);
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

console.log(getSearchInputValue);
