import { useState } from "react";
import { EmptyMovie } from "../../store/features/movieSlice/types";
import FormStyled from "./FromStyled";

const MovieForm = () => {
  const emptyMovie: EmptyMovie = {
    name: "",
    year: "",
    image: "",
    isWatch: false,
  };

  const [newMovie, setNewMovie] = useState(emptyMovie);

  const OnChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMovie(() => ({
      ...newMovie,
      [event.target.id]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  };

  return (
    <>
      <FormStyled className="form">
        <div className="form">
          <label className="form__label" htmlFor="Title">
            Titulo{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="title"
            required
            autoComplete="off"
            onChange={OnChangeData}
          />
        </div>
        <div className="form">
          <label className="form__label" htmlFor="Year">
            Año de estreno{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="year"
            required
            autoComplete="off"
            onChange={OnChangeData}
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
            required
            autoComplete="off"
            onChange={OnChangeData}
          />
        </div>
      </FormStyled>
    </>
  );
};

export default MovieForm;
