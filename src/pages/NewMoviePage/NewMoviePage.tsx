import MovieForm from "../../components/Form/Form";
import NewMovieStyled from "./NewMovieStyled";

const NewMoviePage = (): React.ReactElement => {
  return (
    <NewMovieStyled className="form">
      <h1 className="form__title">Añade una nueva película</h1>
      <MovieForm />
    </NewMovieStyled>
  );
};

export default NewMoviePage;
