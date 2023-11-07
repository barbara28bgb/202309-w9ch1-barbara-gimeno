import { useEffect } from "react";
import useMoviesApi from "../../hooks/useMoviesApi";
import { useAppDispatch } from "../../store/hooks";
import { loadMoviesActionCreator } from "../../store/features/movieSlice/movieSlice";
import MoviesList from "../../components/MoviesList/MoviesList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
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
      <main>
        <MoviesList />
      </main>
    </HomePageStyled>
  );
};

export default HomePage;
