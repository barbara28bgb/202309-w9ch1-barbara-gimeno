import { MovieStructure } from "../../store/features/movieSlice/types";
import MovieCardStyled from "./MovieCardStyled";

interface MoviesCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { name, year, image },
}: MoviesCardProps): React.ReactElement => {
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
    </MovieCardStyled>
  );
};

export default MovieCard;
