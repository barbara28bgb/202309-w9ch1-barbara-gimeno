export interface MovieStructure {
  id: number;
  name: string;
  year: string;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
