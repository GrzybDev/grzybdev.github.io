import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import Particles from "react-particles-js";
import "./Experience.css"

class Experience extends Component {
    render() {
        return (
            <section id="experience">
                <div className="jobStatus">
                    <p>Currently unemployed</p>
                </div>

                <div className="sectionTitle">
                    <h1>Experience</h1>
                </div>

                <div className="sectionDesc">
                    <p>You can also view my resume (in PDF) <a href="#resume">here</a></p>
                </div>

                <br />

                <div className="content">
                    <div className="left">
                        <div className="characteristic">
                            <div className="title">
                                <p>Game Development</p>
                            </div>

                            <div className="desc">
                                <p>There is no part of the game development pipeline that I have not touched, and while every aspect of it is fun, I particularly enjoy network and gameplay programming.</p>
                            </div>
                        </div>

                        <hr />

                        <div className="characteristic">
                            <div className="title">
                                <p>Programming</p>
                            </div>

                            <div className="desc">
                                <p>I love making useful apps, services and solutions. For me it is fun, while my focus is on game development, I am also making prototypes of services, scripts, and other things that can make my (and your!) life easier.</p>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="characteristic">
                            <div className="title">
                                <p>Human Languages</p>
                            </div>

                            <div className="desc">
                                <div className="lang">
                                    <img src="#TODO" alt="Language" />
                                    <p>Somewhat experienced</p>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="characteristic">
                            <div className="title">
                                <p>Programming Languages</p>
                            </div>

                            <div className="desc">
                                <div className="lang">
                                    <img src="#TODO" alt="Language" />
                                    <p>Somewhat experienced</p>
                                </div>
                            </div>
                        </div>


                        <div className="characteristic">
                            <div className="title">
                                <p>Game Engines</p>
                            </div>

                            <div className="desc">
                                <div className="lang">
                                    <img src="#TODO" alt="Language" />
                                    <p>Somewhat experienced</p>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="characteristic">
                            <div className="title">
                                <p>Services</p>
                            </div>

                            <div className="desc">
                                <div className="lang">
                                    <img src="#TODO" alt="service" />
                                    <p>Somewhat experienced</p>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="characteristic">
                            <div className="title">
                                <p>Software</p>
                            </div>

                            <div className="desc">
                                <div className="lang">
                                    <img src="#TODO" alt="logo" />
                                    <p>Somewhat experienced</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="sectionSeparator" />

                <div className="content">
                    <div className="left">
                        <div className="characteristic">
                            <div className="title">
                                <p>Working Experience</p>
                            </div>

                            <div className="desc">
                                <div className="list">
                                    <p>
                                        <a href="#TODO">PeCet Serwis</a>
                                        <br /><br />
                                    Function: <b>IT Technician</b><br />
                                    One month long apprenticeship required from High School
                                    </p>

                                    <ul>
                                        <li>Installing and configuring operating systems and applications</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="left">
                            <div className="characteristic">
                                <div className="title">
                                    <p>Education</p>
                                </div>

                                <div className="desc">
                                    <div className="list">
                                        <p>
                                            <a href="#TODO">PeCet Serwis</a>
                                            <br /><br />
                                    Function: <b>IT Technician</b><br />
                                    One month long apprenticeship required from High School
                                    </p>

                                        <ul>
                                            <li>Installing and configuring operating systems and applications</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="counters">
                    <Particles className="bg" height="200px" width="100vw" />

                    <div className="main">
                        <div className="counter">
                            <div className="counterIcon">
                                <FontAwesomeIcon icon={faCheck} size="2x" />
                            </div>

                            <h4 className="counter">-1</h4>
                            <p className="title">test</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Experience;