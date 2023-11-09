import { configureStore } from "@reduxjs/toolkit";
import moviesMock from "../../mocks/moviesMock";
import { moviesReducer } from "../../store/features/movieSlice/movieSlice";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import MoviesList from "./MoviesList";
import { render, screen } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";

describe("Given a MovieList component", () => {
  describe("When it receives an array of movies with 'Regreso al futuro' and 'El padrino'", () => {
    test("Then it should show 2 MoviesCards, one with 'Regreso al futuro' and one with 'El padrino'", () => {
      const expectedMovies = 2;
      const movies = moviesMock;

      const mockStore = configureStore({
        reducer: {
          moviesState: moviesReducer,
        },
        preloadedState: { moviesState: { movies: movies } },
      });

      render(
        <Provider store={mockStore}>
          <ThemeProvider theme={mainTheme}>
            <MoviesList />
          </ThemeProvider>
        </Provider>,
      );
      const listItems = screen.getAllByRole("listitem").length;

      expect(listItems).toBe(expectedMovies);
    });
  });
});
