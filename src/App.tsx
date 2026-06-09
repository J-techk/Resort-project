import { Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
import Exclusives from "./components/Exclusives/Exclusives";

// import Landingpage from "./pages/Landingpage";
import Navbar from "./components/Navbar";
import Landingpage from "./pages/Landingpage";
import About from "./components/About/About";


function App() {
  return (
    <>
     

      <Routes>
         <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landingpage" element={<Landingpage />} /> 
       

      </Routes>
      <Navbar/>
      <Exclusives />
      <About/>
    </>
  );
}

export default App;
