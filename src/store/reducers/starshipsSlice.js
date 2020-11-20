import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  starships: [],
  starship: {},
  pilots: [],
  query: "",
  loading: true,
  error: false,
  hasMore: null,
  pageNumber: 1,
};

const starshipsSlice = createSlice({
  name: "starships",
  initialState,
  reducers: {
    getStarshipsRequest(state, action) {
      state.loading = true;
      state.error = false;
    },
    getStarshipsSuccess(state, { payload }) {
      state.starships = [...state.starships, ...payload.starships];
      state.hasMore = payload.next !== null;
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

    setPageNumber(state, action) {
      state.pageNumber = action.payload;
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
