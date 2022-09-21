import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=9dd25689&s=${term}&i=tt1285016&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=9dd25689&s=${term}&i=tt1285016&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncDetails = createAsyncThunk(
  "movies/fetchAsyncDetails",
  async (id) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=9dd25689&i=${id}&Plot=full`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  history: {},
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, action) => {
    //   state.movies = action.payload;
    // },
    // addShows: (state, action) => {
    //   state.shows = action.payload;
    // },
    // wrongDetails: (state, action) => {
    //   const { id, type } = action.payload;

    //   if (type === "series") {
    //     // console.log("This is a series and its id is", id);
    //     return (state.history = state.shows.find((show) => show.id === id));
    //     // state.history = state.shows;
    //     // console.log(state.history);
    //   } else if (type === "movie") {
    //     // console.log("This is a movie and its id is", id);
    //     return (state.history = state.movies.find((movie) => movie.id === id));
    //     // state.history = state.shows;
    //     // console.log(state.history);
    //   }
    // },
    // details: (state, action) => {
    //   state.history = action.payload;
    // },
    clear: (state) => {
      state.history = {};
    },
  },
  extraReducers: {
    // [fetchAsyncMovies.pending]: () => {
    //   console.log("pending");
    // },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("Fetched successfully");
      return { ...state, movies: action.payload };
    },
    // [fetchAsyncMovies.rejected]: () => {
    //   console.log("Rejected");
    // },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      console.log("Fetched shows successfully");
      return { ...state, shows: action.payload };
    },
    [fetchAsyncDetails.fulfilled]: (state, action) => {
      return { ...state, history: action.payload };
    },
  },
});

export default movieSlice.reducer;
export const { clear } = movieSlice.actions;
