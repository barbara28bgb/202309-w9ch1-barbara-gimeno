import { MovieStructure } from "../../store/features/movieSlice/types";

interface MoviesCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { name, year },
}: MoviesCardProps): React.ReactElement => {
  return (
    <article>
      <h2 className="movies"> {name}</h2>
      <span>{year}</span>
    </article>
  );
};

export default MovieCard;
