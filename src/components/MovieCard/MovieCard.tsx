import { useDispatch } from "react-redux";
import { MovieStructure } from "../../store/features/movieSlice/types";
import MovieCardStyled from "./MovieCardStyled";
import { useCallback } from "react";
import { toggleWatchMovieActionCreator } from "../../store/features/movieSlice/movieSlice";
import useMoviesApi from "../../hooks/useMoviesApi";

interface MoviesCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { name, year, image, isWatch, id },
  movie,
}: MoviesCardProps): React.ReactElement => {
  const dispatch = useDispatch();

  const { changeWatchStatus } = useMoviesApi();

  const isChangeStatus = useCallback(async () => {
    dispatch(toggleWatchMovieActionCreator(id));
    await changeWatchStatus(movie);
  }, [changeWatchStatus, dispatch, id, movie]);

  return (
    <MovieCardStyled className="movie-container">
      <img
        className="movie-container__image"
        src={image}
        alt={name}
        width={280}
        height={380}
      />
      <h2 className="movie-container__title"> {name}</h2>
      <span className="movie-container__year">{year}</span>
      <label htmlFor="isWatch">
        <input
          type="checkbox"
          name="isWatch"
          checked={movie.isWatch}
          onChange={isChangeStatus}
        />
      </label>
      <span>
        {isWatch ? "He visto esta película " : "No he visto esta película"}
      </span>
    </MovieCardStyled>
  );
};

export default MovieCard;
