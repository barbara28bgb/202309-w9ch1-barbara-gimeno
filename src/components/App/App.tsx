import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const App = (): React.ReactElement => {
  const movies = useAppSelector((state) => {
    return state.moviesState;
  });

  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <Routes>
          <Route path="/films" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
