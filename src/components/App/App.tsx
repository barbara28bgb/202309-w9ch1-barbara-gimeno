import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

const App = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/films" />} />
      <Route path="/films" element={<HomePage />} />
      <Route path="/new-film" element={<Navigate to="/new-film" />} />
    </Routes>
  );
};

export default App;
