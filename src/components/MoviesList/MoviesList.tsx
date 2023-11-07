import Movies from "../../types"
import MoviesCard from "../MoviesCard/MoviesCard";


interface MoviesList {
  movies: Movies[];
}

const MoviesList = ({movies}: React.ReactElement =>{
  return (
    <ul className="movies">
    {movies.map((movies) => (
      <li {movies.id}>
        <MoviesCard movies= {movies} />
      </li>
    ))}
      </ul>
  )
};

export default MoviesList;
