import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { Component } from "react";
import Particles from "react-particles-js";
import "./Experience.css"

class Experience extends Component {

    state = {
        jobStatus: "",
        sectionName: "",
        sectionDesc: "",
        characteristic: [],
        data: [],
        counters: [],
        projectCount: 0
    }

    applyData(data, id) {
        this.setState({
            jobStatus: data.personal.jobStatus,
            sectionName: data.common.sections[id].name,
            sectionDesc: data.common.sections[id].description,
            characteristic: data.experience.characteristic,
            data: data.experience.data,
            counters: data.experience.counters
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

    getConvertedDate(date) {
        const startTime = moment(date, "DD-MM-YYYY");
        const currentTime = moment();

        const diffirence = {
            year: currentTime.diff(startTime, "years"),
            months: currentTime.diff(startTime, "months"),
            days: currentTime.diff(startTime, "days"),
            hours: currentTime.diff(startTime, "hours"),
            minutes: currentTime.diff(startTime, "minutes"),
            seconds: currentTime.diff(startTime, "seconds")
        }

        if (diffirence.year > 0)
            return diffirence.year === 1 ? [diffirence.year, "year"] : [diffirence.year, "years"];
        else if (diffirence.months > 0)
            return diffirence.months === 1 ? [diffirence.months, "month"] : [diffirence.months, "months"];
        else if (diffirence.days > 0)
            return diffirence.days === 1 ? [diffirence.days, "day"] : [diffirence.days, "days"];
        else if (diffirence.minutes > 0)
            return diffirence.minutes === 1 ? [diffirence.minutes, "minute"] : [diffirence.minutes, "minutes"];
        else
            return diffirence.seconds === 1 ? [diffirence.seconds, "second"] : [diffirence.seconds, "seconds"];
    }

    getCounter(method, date) {
        switch (method) {
            case "projects":
                return [this.state.projectCount, ""];
            case "calendar":
                return this.getConvertedDate(date);
            default:
                return [-1, ""];
        }
    }

    updateProjectCount(add) {
        this.setState({
            projectCount: this.state.projectCount + add
        });
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

        const counters = this.state.counters.map((entry, index) => (
            <div className="counter" key={index}>
            <div className="counterIcon">
                <FontAwesomeIcon icon={entry.icon} size="2x" />
            </div>

            <h4 className="number">{ this.getCounter(entry.method, entry.date)[0] }</h4>
            <p className="title">{this.getCounter(entry.method, entry.date)[1] === "" ? entry.name : `${this.getCounter(entry.method, entry.date)[1]} ${entry.name}`}</p>
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
                        {counters}
                    </div>
                </div>
            </section>
        )
    }
}

export default Experience;