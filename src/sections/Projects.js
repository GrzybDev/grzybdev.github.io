import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { API_SERVER } from "../config";
import "./Projects.css"

class Projects extends Component {

    state = {
        sectionName: "",
        sectionDesc: "",
        sources: [],
        projects: {}
    }

    applyData(data, id) {
        this.setState({
            sectionName: data.common.sections[id].name,
            sectionDesc: data.common.sections[id].description,
            sources: data.projects.sources
        });

        const newProjects = this.state.projects;

        this.state.sources.forEach((entry, index) => {
            switch (entry.method) {
                case "api":
                    fetch(`${API_SERVER}/portfolio/projects`)
                        .then(response => response.json())
                        .then(data => {
                            if (data.length === 0) return;

                            newProjects[index] = []

                            data.forEach((entry) => {
                                fetch(`${API_SERVER}/portfolio/projects/${entry}`)
                                .then(pResponse => pResponse.json())
                                .then(pData => {
                                    pData["icon"] = `${API_SERVER}/portfolio/projects/${entry}/${pData.icon}`;

                                    if (pData["show"]) this.props.projectHandler(1);

                                    newProjects[index].push(pData);
                                    this.setState({ projects: newProjects });
                                });
                            });
                        });
                    break;
                default:
                    break;
            }
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

    renderProjects(id) {
        if (!this.state.projects[id]) return (<h1 className="noProjects" dangerouslySetInnerHTML={{ __html: `No projects found!<br/>Please check again later` }} />);

        return this.state.projects[id].map((entry, index) => {
             if (!entry.show) return "";

             return (<div className="entry">
                <a href={`?/project/${entry.name}`}>
                    <div className="tile" key={index}>
                        <div className="bg" style={{ backgroundImage: `url('${entry.icon}')` }} />
                        <div className="tileTitle">
                            {entry.name}
                        </div>
                    </div>
                </a>

                <div className="badges">
                    {this.renderBadges(entry.badges)}
                </div>

                <div className="shortDescription">
                    {entry.shortDescription}
                </div>

                <br />

                <div className="highlights">
                    {this.renderHighlights(entry.highlights) ? <p>Highlights:</p> : ""}
                    <ul>
                        {this.renderHighlights(entry.highlights)}
                    </ul>
                </div>
            </div>)
        });
    }

    render() {
        if (this.state.sectionName === "") return null;

        const subsections = this.state.sources.map((entry, index) => (
            <div className="subsection" key={index}>
                <div className="title">
                    <FontAwesomeIcon icon={entry.icon} />&nbsp;{entry.name}&nbsp;<FontAwesomeIcon icon={entry.icon} />
                </div>

                <br />

                <div className="list">
                    {this.state.projects[index] ? this.renderProjects(index) : ""}
                </div>
            </div>
        ));

        return (
            <section id="projects">
                <div className="sectionTitle">
                    <h1>{this.state.sectionName}</h1>
                </div>

                <div className="sectionDesc">
                    <p dangerouslySetInnerHTML={{ __html: this.state.sectionDesc }} />
                </div>

                <hr />

                {subsections}
            </section>
        )
    }
}

export default Projects;