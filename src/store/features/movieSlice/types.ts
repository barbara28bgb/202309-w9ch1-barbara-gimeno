export interface MovieStructure {
  id: number;
  name: string;
  year: string;
  image: string;
  isWatch: boolean;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
