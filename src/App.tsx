import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Exclusives from "./components/Exclusives/Exclusives";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Exclusives />
    </>
  );
}

export default App;
