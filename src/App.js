import Particles from "react-particles-js";
import particlesConfig from "./config/particles.json";
import "./App.css";
import Landing from "./sections/Landing";

function App() {
  return (
  <main>
    <Particles className="bgParticles" height="100vh" width="100vw" params={particlesConfig} />

    <div id="PageContent">
      <Landing />
    </div>
  </main>);
}

export default App;
