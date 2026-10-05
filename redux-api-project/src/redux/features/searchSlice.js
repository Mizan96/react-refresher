import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTabs: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery: (state, actions) => {
      state.query = actions.payload;
    },
    setActiveTabs: (state, actions) => {
      state.activeTabs = actions.payload;
    },
    setResults: (state, actions) => {
      state.results = actions.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, actions) => {
      state.error = actions.payload;
      state.loading = false;
    },
    clearResults: (state) => {
      state.results = [];
    },
  },
});

export const { setQuery, setActiveTabs, setResults, setLoading, setError } =
  searchSlice.actions;
export default searchSlice.reducer;
