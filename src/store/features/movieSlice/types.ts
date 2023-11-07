export interface MovieStructure {
  id: number;
  name: string;
  year: string;
  image: string;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
