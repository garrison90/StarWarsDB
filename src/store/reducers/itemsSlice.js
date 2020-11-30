import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  items: [],
  loading: true,
  error: false,
  hasMore: null,
  pageNumber: 1,
  id: "",
  query: "",
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    getAllPeopleRequest(state, action) {
      state.loading = true;
      state.error = false;
    },
    getPlanetsDataRequest(state, action) {
      state.loading = true;
      state.error = false;
    },
    getStarshipsRequest(state, action) {
      state.loading = true;
      state.error = false;
    },
    getItemsRequestSuccess(state, action) {
      state.items = [...state.items, ...action.payload.items];
      state.hasMore = action.payload.next !== null;
      state.loading = false;
    },
    getItemsRequestFailure(state, action) {
      state.error = true;
      state.loading = false;
    },
    setPageNumber(state, action) {
      state.pageNumber += 1;
    },
    setQuery(state, action) {
      state.query = action.payload;
      state.pageNumber = 1;
      state.items = [];
    },
    clearItems: () => initialState,
  },
});

export const {
  getAllPeopleRequest,
  getItemsRequestFailure,
  getItemsRequestSuccess,
  getPlanetsDataRequest,
  getStarshipsRequest,
  setPageNumber,
  setQuery,
  clearItems,
} = itemsSlice.actions;
export default itemsSlice.reducer;
