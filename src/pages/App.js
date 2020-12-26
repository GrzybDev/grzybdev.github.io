import Particles from "react-particles-js";
import "./App.css";
import Landing from "../sections/Landing";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Navbar from "../elements/Navbar";
import BackToTop from "../elements/BackToTop";
import Preloader from "../elements/Preloader";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Crash from "./Crash";

class App extends React.Component {

  state = {
    hasCrashed: false,
    crashReason: "",
    particlesConfig: {}
  }

  constructor() {
    super();

    library.add(fas);
    library.add(fab);

    this.navbarRef = React.createRef();
    this.backToTopRef = React.createRef();

    this.landingRef = React.createRef();
    this.experienceRef = React.createRef();
    this.projectsRef = React.createRef();
    this.contactRef = React.createRef();
  }

  loadData(type, data) {
    if (data?.error) {
      this.setState({
        crashReason: "backendError",
        backend_error: data.message,
        hasCrashed: true
      });

      return;
    }

    try {
      switch (type) {
        case "common": {
          this.setState({ particlesConfig: data.particles.background });

          this.navbarRef.current.applyData(data);
          this.backToTopRef.current.applyData(data);

          this.landingRef.current.applyData(data);
          this.experienceRef.current.applyData(data, 1);
          this.projectsRef.current.applyData(data, 2);
          this.contactRef.current.applyData(data, 3);

          window.scrollTo(0, 0);
          break;
        }
        default:
          this.setState({ hasCrashed: true, crashReason: "failedToConnect" });
          break;
      }
    }
    catch {
      this.setState({ hasCrashed: true, crashReason: "badResponse" });
    }
  }

  componentDidCatch() {
    this.setState({ hasCrashed: true, crashReason: "renderError" })
  }

  projectHandler(add) {
    this.experienceRef.current.updateProjectCount(add);
  }

  render() {
    if (this.state.hasCrashed) return <Crash reason={this.state.crashReason} desc={this.state.backend_error} />

    return (
      <main>
        <Particles className="bgParticles" height="100vh" width="100vw" params={this.state.particlesConfig} />

        <div id="PageContent">
          <Landing ref={this.landingRef} />
          <Experience ref={this.experienceRef} />
          <Projects ref={this.projectsRef} projectHandler={this.projectHandler.bind(this)} />
          <Contact ref={this.contactRef} />
        </div>

        <Navbar ref={this.navbarRef} />
        <BackToTop ref={this.backToTopRef} />
        <Preloader handler={this.loadData.bind(this)} />
      </main>
    )
  }
}

export default App;
