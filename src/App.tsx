import { Route, Routes } from "react-router-dom";
import Loginpage from "./pages/Login";
import Register from "./pages/Register";
import Landingpage from "./pages/Landingpage";



function App() {
  return (
    <>
     

      <Routes>
         <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landingpage" element={<Landingpage />} /> 
       

      </Routes>
     
    </>
  );
}

export default App;
