import Particles from "react-particles-js";
import particlesConfig from "./config/particles.json";
import "./App.css";
import Landing from "./sections/Landing";
import Experience from "./sections/Experience";
import PerfectScrollbar from 'react-perfect-scrollbar'
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
  <main>
    <Particles className="bgParticles" height="100vh" width="100vw" params={particlesConfig} />

    <PerfectScrollbar id="PageContent">
      <Landing />
      <Experience />
      <Projects />
      <Contact />
    </PerfectScrollbar>
  </main>);
}

export default App;
