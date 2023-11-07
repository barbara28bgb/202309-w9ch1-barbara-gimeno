import { NavLink } from "react-router-dom";
import { MovieStructure } from "../../store/features/movieSlice/types";

interface MoviesCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { id, name, year },
}: MoviesCardProps): React.ReactElement => {
  return (
    <article>
      <h2 className="movies">
        <NavLink to={`/films/${id}`}>
          {name}, {year}
        </NavLink>
      </h2>
    </article>
  );
};

export default MovieCard;
