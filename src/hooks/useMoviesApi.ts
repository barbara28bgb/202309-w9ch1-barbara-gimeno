import { useCallback } from "react";
import { MovieStructure } from "../store/features/movieSlice/types";

const useMoviesApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getMovies = useCallback(async (): Promise<MovieStructure[]> => {
    const response = await fetch(`${apiUrl}/movies`);
    const movies = (await response.json()) as MovieStructure[];

    return movies;
  }, [apiUrl]);

  const changeWatchStatus = useCallback(
    async (movie: MovieStructure) => {
      const response = await fetch(`${apiUrl}/movies/${movie.id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/Json" },
        body: JSON.stringify({ isWatch: !movie.isWatch }),
      });
      if (!response.ok) return false;
    },
    [apiUrl],
  );

  return {
    getMovies,
    changeWatchStatus,
  };
};

export default useMoviesApi;
