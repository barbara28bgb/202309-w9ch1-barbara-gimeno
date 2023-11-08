import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieStructure, MoviesStateStructure } from "./types.ts";

const initialMoviesState: MoviesStateStructure = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    loadMovies: (
      currentState,
      action: PayloadAction<MovieStructure[]>,
    ): MoviesStateStructure => ({
      ...currentState,
      movies: action.payload,
    }),

    toggleWatchMovie: (
      currentState: MoviesStateStructure,
      action: PayloadAction<number>,
    ): MoviesStateStructure => {
      return {
        ...currentState,
        movies: currentState.movies.map((movie) => ({
          ...movie,
          isWatch: movie.id === action.payload ? !movie.isWatch : movie.isWatch,
        })),
      };
    },
  },
});
export const {
  loadMovies: loadMoviesActionCreator,
  toggleWatchMovie: toggleWatchMovieActionCreator,
} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
