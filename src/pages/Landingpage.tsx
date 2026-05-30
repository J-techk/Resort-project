import Navbar from "../components/Navbar";
import Exclusive from "../components/Exclusive";
import Services from "../components/Services";
import Travellers from "../components/Travellers";
import About from "../components/About";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <Exclusive />
      <Services />
      <Travellers />
      <About />
    </div>
  );
};

export default Landingpage;
