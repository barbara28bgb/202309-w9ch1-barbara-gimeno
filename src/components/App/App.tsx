import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

const App = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/films" element={<HomePage />} />
      <Route path="/" element={<Navigate to="/films" />} />
    </Routes>
  );
};

export default App;
