import { Route, Routes } from "react-router-dom";

// import Travellers from "./components/Travellers";
import Loginpage from "./pages/Loginpage";
import Landingpage from "./pages/Landingpage";
import Register from "./components/Register";

function App() {
  return (
    <>
      {/* // <Travellers /> */}

      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landingpage" element={<Landingpage />} />
      </Routes>
    </>
  );
}

export default App;
