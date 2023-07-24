import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Services/Service";
import Tours from "./components/Tours/Tours";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;
