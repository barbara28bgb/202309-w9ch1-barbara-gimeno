import { MovieStructure } from "../store/features/movieSlice/types";

const moviesMock: MovieStructure[] = [
  {
    id: 1,
    name: "Regreso al futuro",
    year: "1985",
    isWatch: false,
    image: "https://i.ibb.co/GHDmVMt/regreso.webp",
  },
  {
    id: 2,
    name: "El Padrino",
    year: "1972",
    isWatch: false,
    image: "https://i.ibb.co/5RJcB5M/padrino.webp",
  },
];

export default moviesMock;
