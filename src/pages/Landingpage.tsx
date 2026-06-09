import About from "../components/About/About";
import Navbar from "../components/Navbar";
import Services from "../components/Services/Services"
import Travellers from "../components/Travellers";


const Landingpage = () => {
  return (
    <div>
      <Navbar/>
      <Services />
      <Travellers />
      <About />
    </div>
  );
};

export default Landingpage;
