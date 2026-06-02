import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Exclusives from "./components/Exclusives/Exclusives";

function App() {
  return (
    <>
      {/* // <Travellers /> */}

      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landingpage" element={<Landingpage />} />
      </Routes>
      <Exclusives />
    </>
  );
}

export default App;
