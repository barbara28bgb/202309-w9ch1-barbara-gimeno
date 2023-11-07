import { createSlice } from "@reduxjs/toolkit";

export interface MoviesStructure {
  id: number;
  name: string;
  year: string;
}

interface MoviesStateStructure {
  movies: MoviesStructure[]
}

const initialMoviesState = {
  movies: []
}

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    loadMovies: (currentState.action) = PayloadAction<MoviesStructure[]>)
     return { 
  ...currentState,
    state.movies= action.payload;
    }    
  }; 
});

export const {loadMovies: loadMoviesActionCreator} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer
;
