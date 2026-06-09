import { Route, Routes } from "react-router-dom";
import Loginpage from "./components/Login";
import Register from "./components/Register";

import Landingpage from "./pages/Landingpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Landingpage" element={<Landingpage />} />
      </Routes>
    </>
  );
}

export default App;
