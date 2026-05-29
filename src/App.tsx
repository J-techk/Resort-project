
import Navbar from "./components/Navbar";
import Exclusive from "./components/Exclusive";
import Services from "./components/Services/Services";
import Traveller from "./components/Travellers";
import About from "./components/About";

function App() {
  return (
    <>
        <Navbar />
      <Exclusive />
      <Services />
      <Traveller />
      <About />
    </>
  );
}

export default App;
