import About from "../components/About/About";
import Navbar from "../components/Navbar";
import Services from "../components/Services/Services"
import Travellers from "../components/Travellers";
import Exclusive from "../components/Exclusive";

const Landingpage = () => {
  return (
    <div>
      <Navbar/>
      <Exclusive/>
      <Services />
      <Travellers />
      <About />
    </div>
  );
};

export default Landingpage;
