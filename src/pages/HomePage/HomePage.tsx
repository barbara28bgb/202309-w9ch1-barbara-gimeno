import { useEffect } from "react";
import useMoviesApi from "../../hooks/useMoviesApi";
import { loadMoviesActionCreator } from "../../store/features/movieSlice/movieSlice";
import MoviesList from "../../components/MoviesList/MoviesList";
import HomePageStyled from "./HomePageStyled";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const HomePage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { getMovies } = useMoviesApi();

  useEffect(() => {
    (async () => {
      const actualMovies = await getMovies();
      dispatch(loadMoviesActionCreator(actualMovies));
    })();
  }, [dispatch, getMovies]);

  return (
    <HomePageStyled className="home-page">
      <h1 className="home-page__title">
        Mejores 5 películas de los últimos años
      </h1>
      <NavLink aria-label="Añade una nueva película" to="/new-film">
        <span>Añade una nueva película</span>
      </NavLink>
      <main>
        <MoviesList />
      </main>
    </HomePageStyled>
  );
};

export default HomePage;
