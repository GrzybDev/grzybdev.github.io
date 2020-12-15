import Particles from "react-particles-js";
import particlesConfig from "./config/particles.json";
import "./App.css";
import Landing from "./sections/Landing";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from "./Navbar";
import BackToTop from "./BackToTop";
import Preloader from "./Preloader";

function App() {
  return (
  <main>
    <Particles className="bgParticles" height="100vh" width="100vw" params={particlesConfig} />

    <div id="PageContent">
      <Landing />
      <Experience />
      <Projects />
      <Contact />
    </div>

    <Navbar />
    <BackToTop />
    <Preloader />
  </main>);
}

export default App;
