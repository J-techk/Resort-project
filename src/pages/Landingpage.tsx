import Navbar from "../components/Navbar";
import Services from "../components/Services/Services";
import Travellers from "../components/Travellers";
import About from "../components/About/About";
import Exclusives from "../components/Exclusives/Exclusives";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <Exclusives />
      <Services />
      <Travellers />
      <About />
    </div>
  );
};

export default Landingpage;
