import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import BackToTop from "../elements/BackToTop";
import Navbar from "../elements/Navbar";
import Preloader from "../elements/Preloader";
import React from "react";
import Contact from "../sections/Contact";
import "./Project.css";
import { API_SERVER } from "../config";
import { useParams } from "react-router-dom";

class ProjectSite extends Component {

    state = {}

    constructor(params) {
        super(params);

        this.projectId = params.id;

        library.add(fas);
        library.add(fab);

        this.navbarRef = React.createRef();
        this.backToTopRef = React.createRef();
        this.contactRef = React.createRef();
    }

    loadData(type, data) {
        try {
            switch (type) {
                case "common": {
                    this.navbarRef.current.applyData(data);
                    this.backToTopRef.current.applyData(data);

                    this.contactRef.current.applyData(data, 3);

                    window.scrollTo(0, 0);
                    break;
                }
                default:
                    this.setState({ hasCrashed: true, crashReason: "failedToConnect" });
                    break;
            }
        }
        catch (error) {
            this.setState({ hasCrashed: true, crashReason: "badResponse" });
        }
    }

    componentDidMount() {
        fetch(`${API_SERVER}/portfolio/projects/${this.projectId}`)
            .then(pResponse => pResponse.json())
            .then(pData => {
                pData["icon"] = `${API_SERVER}/portfolio/projects/${this.projectId}/${pData.icon}`;
                this.setState({ ...pData });
            });
    }

    renderBadges(badgesData) {
        return badgesData?.map((entry, index) => (
            <div className="badge" style={{ backgroundColor: entry.color }} key={index}>{entry.text}</div>
        ));
    }

    renderHighlights(highlightsData) {
        return highlightsData?.map((entry, index) => (
            <li key={index}>{entry}</li>
        ));
    }

    render() {
        return (
            <main>
                <Navbar ref={this.navbarRef} />
                <BackToTop ref={this.backToTopRef} />
                <Preloader handler={this.loadData.bind(this)} />

                <div className="project">
                    <div className="head">
                        <img src={this.state.icon} alt="" />
                        <h1>{this.state.name}</h1>
                    </div>
                    <div className="badges">
                        {this.renderBadges(this.state.badges)}
                    </div>
                    <hr />
                    <p dangerouslySetInnerHTML={{ __html: this.state.description }} />
                    { this.state.license ? <p>{`Licensed under: ${this.state.license}`}</p> : null }
                    <div className="highlights">
                        {this.renderHighlights(this.state.highlights) ? <p>Highlights:</p> : ""}
                        <ul>
                            {this.renderHighlights(this.state.highlights)}
                        </ul>
                    </div>
                    <hr />
                    <div className="buttons">
                        <a href={this.state.url} className={`btn src ${this.state.public ? "" : "disabled"}`}>Source Code</a>
                        <a href={this.state.project_site} className={`btn proj ${this.state.project_site ? "" : "disabled"}`}>Project Site</a>
                    </div>
                </div>

                <Contact ref={this.contactRef} />
            </main>
        )
    }
}

function ProjectSiteProxy() {
    let { id } = useParams();

    return <ProjectSite id={id} />
}

export default ProjectSiteProxy;