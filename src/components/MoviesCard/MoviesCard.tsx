import { NavLink } from "react-router-dom";
import Movies from "../../types";

interface MoviesCardProps {
  movies: Movies;
}

const MoviesCard = ({
  movies: { id, name, year },
}: MoviesCardProps): React.ReactElement => {
  return (
    <h2 className="movies">
      <NavLink to={`/films/${id}`}>
        {name}, {year}
      </NavLink>
    </h2>
  );
};

export default MoviesCard;
