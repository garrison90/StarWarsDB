import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  starships: [],
  starship: {},
  pilots: [],
  query: "",
  loading: true,
  error: false,
  hasMore: null,
  pageNumber: 1,
  id: "",
};

const starshipsSlice = createSlice({
  name: "starships",
  initialState,
  reducers: {
    getStarshipsRequest(state, action) {
      state.loading = true;
      state.error = false;
    },
    getStarshipsSuccess(state, action) {
      state.starships = [...state.starships, ...action.payload.starships];
      state.hasMore = action.payload.next !== null;
      state.loading = false;
    },
    getStarshipsFailure(state, action) {
      state.loading = false;
      state.error = true;
    },
    getStarshipDetailsRequest(state, action) {
      state.loading = true;
      state.id = action.payload;
      state.error = false;
    },
    getStarshipDetailsSuccess(state, action) {
      state.starship = action.payload.starship;
      state.pilots = action.payload.pilots;
      state.loading = false;
    },
    getStarshipDetailsFailure(state, action) {
      state.loading = false;
      state.error = true;
    },
    setPageNumber(state, action) {
      state.pageNumber += 1;
    },
    setQuery(state, action) {
      state.query = action.payload;
      state.pageNumber = 1;
      state.starships = [];
    },
    clearStarships: () => initialState,
  },
});

export const {
  getStarshipsRequest,
  getStarshipsSuccess,
  getStarshipsFailure,
  getStarshipDetailsRequest,
  getStarshipDetailsSuccess,
  getStarshipDetailsFailure,
  setPageNumber,
  setQuery,
  clearStarships,
} = starshipsSlice.actions;
export default starshipsSlice.reducer;
