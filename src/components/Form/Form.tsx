import { EmptyMovie } from "../../store/features/movieSlice/types";

const MovieForm = () => {
  const emptyMovie: EmptyMovie = {
    name: "",
    year: "",
    image: "",
    isWatch: false,
  };

  return (
    <>
      <form className="form">
        <div className="form">
          <label className="form__label" htmlFor="Title">
            Titulo{" "}
          </label>
          <input className="form__input" type="text" id="title" required />
        </div>
        <div className="form">
          <label className="form__label" htmlFor="Year">
            Año de estreno{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="year"
            value={emptyMovie.year}
            required
          />
        </div>
        <div className="form">
          <label className="form__label" htmlFor="Image">
            Imagen{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="image"
            value={emptyMovie.image}
            required
          />
        </div>
      </form>
    </>
  );
};

export default MovieForm;
