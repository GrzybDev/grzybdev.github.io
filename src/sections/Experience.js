import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import Particles from "react-particles-js";
import "./Experience.css"

class Experience extends Component {

    state = {
        jobStatus: "",
        sectionName: "",
        sectionDesc: "",
        characteristic: [],
        data: []
    }

    applyData(data, id) {
        this.setState({
            jobStatus: data.personal.jobStatus,
            sectionName: data.common.sections[id].name,
            sectionDesc: data.common.sections[id].description,
            characteristic: data.experience.characteristic,
            data: data.experience.data
        });
    }

    getSubsection(id) {        
        return this.state.data[id].list.map((entry, index) => (
            <div className="lang" key={index}>
                <img src={entry.icon} alt={entry.name} />
                <p>{entry.name}</p>
                <p className="status">{entry.status}</p>
            </div>
        ));
    }

    getEntries(id) {
        if (!this.state.characteristic[id].list) return null;

        this.state.characteristic[id].list.reverse();

        return this.state.characteristic[id].list.map((entry, index) => (
            <div className="entry" key={index}>
                <p>
                    <a href={entry.url}>{entry.title}</a>
                    <br /><br />
                    {this.renderDate(entry)}
                    <span dangerouslySetInnerHTML={{ __html: entry.description }} />
                </p>

                <ul>
                    {this.getFeatures(id, index)}
                </ul>
            </div>
        ))
    }

    getFeatures(entry, id) {
        return this.state.characteristic[entry].list[id].points.map((e, i) => (<li key={i}>{e}</li>))
    }

    renderDate(data) {
        if (data.from) {
            return data.to ? `${data.from} - ${data.to}` : `${data.from} - Currently`
        }
    }

    render() {
        if (this.state.sectionName === "") return null;

        const characteristic = this.state.characteristic.map((entry, index) => (
            <div className="characteristic" key={index}>
                <div className="title">
                    <p>{entry.title}</p>
                </div>

                <div className="desc">
                    <p dangerouslySetInnerHTML={{ __html: entry.description }} />
                    {this.getEntries(index)}
                </div>

                {entry.disableLine ? null : <hr/>}
            </div>
        ));

        const data = this.state.data.map((entry, index) => (
            <div className="characteristic" key={index}>
                <div className="title">
                    <p>{entry.name}</p>
                </div>

                <div className="desc">
                    {this.getSubsection(index)}
                </div>

                <hr />
            </div>
        ));

        return (
            <section id="experience">
                <div className="jobStatus">
                    <p dangerouslySetInnerHTML={{ __html: this.state.jobStatus }} />
                </div>

                <div className="sectionTitle">
                    <h1>{this.state.sectionName}</h1>
                </div>

                <div className="sectionDesc">
                    <p dangerouslySetInnerHTML={{ __html: this.state.sectionDesc }} />
                </div>

                <br />

                <div className="content">
                    <div className="left">
                        {characteristic}
                    </div>

                    <div className="right">
                        {data}
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