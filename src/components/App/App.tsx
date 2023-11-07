import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const App = (): React.ReactElement => {
  const movies = useAppSelector((state) => {
    return state.moviesState;
  });

  const dispatch = useAppDispatch();

  return (
        <Routes>
          <Route path="/films" element={<HomePage />} />
          <Route path="/" element={<Navigate to= "*home" /> }
        </Routes>
  );
};

export default App;
