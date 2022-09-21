import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./moviesSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    allMovies: movieReducer,
    searchText: searchReducer,
  },
});
