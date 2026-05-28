import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Exclusive from "./components/Exclusive";
import Services from "./components/Services";
import Traveller from "./components/Travellers";
import About from "./components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/" element={<Exclusive />} />
        <Route path="/" element={<Services />} />
        <Route path="/" element={<Traveller />} />
        <Route path="/" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
