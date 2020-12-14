import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import "./Projects.css"

class Projects extends Component {
    render() {
        return (
            <section id="projects">
                <div className="sectionTitle">
                    <h1>Projects</h1>
                </div>

                <div className="sectionDesc">
                    <p>Click on the tiles to learn more about each project.</p>
                </div>

                <hr />

                <div className="subsection">
                    <div className="title">
                        <FontAwesomeIcon icon={faUser} />&nbsp;Personal Projects&nbsp;<FontAwesomeIcon icon={faUser} />
                    </div>

                    <br/>

                    <div className="list">
                        <div className="entry">
                            <div className="tile">
                                <div className="bg" style={{ backgroundImage: "url('')" }} />
                                <div className="tileTitle">
                                    Test Project
                                </div>
                            </div>

                            <div className="badges">
                                <div className="badge" style={{ backgroundColor: 'red' }}>Test</div>
                                <div className="badge" style={{ backgroundColor: 'red' }}>Test</div>
                                <div className="badge" style={{ backgroundColor: 'red' }}>Test</div>
                                <div className="badge" style={{ backgroundColor: 'red' }}>Test</div>
                            </div>

                            <div className="shortDescription">
                            </div>

                            <br />
                            <div className="highlights">
                                Highlights:
                                <div className="list">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;