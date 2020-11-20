import { createSlice } from "@reduxjs/toolkit";

const anotherStarshipsSlice = createSlice({
  name: "starships",
  initialState: {
    starships: [],
    query: "",
    loading: true,
    error: false,
    hasMore: null,
    pageNumber: 1,
  },
  reducers: {
    getAnotherStarshipsRequest(state, action) {
      state.loading = true;
      state.error = false;
    },
    getAnotherStarshipsSuccess(state, { payload }) {
      state.starships = [...state.starships, ...payload.starships];
      state.hasMore = payload.next !== null;
      state.loading = false;
    },
    getAnotherStarshipsFailure(state, action) {},
    setPageNumber(state, action) {
      state.pageNumber = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
      state.pageNumber = 1;
      state.starships = [];
    },
  },
});

export const {
  getAnotherStarshipsRequest,
  getAnotherStarshipsSuccess,
  getAnotherStarshipsFailure,
  setPageNumber,
  setQuery,
} = anotherStarshipsSlice.actions;
export default anotherStarshipsSlice.reducer;
