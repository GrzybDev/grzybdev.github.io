import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTyped from 'react-typed';
import "./Landing.css";

const { Component } = require("react");

class Landing extends Component {

    state = {
        name: "",
        selfieUrl: "",
        selfieAlt: "",
        signText: "",
        signIcon: "",
        proffesions: [],
        about: ""
    }

    getName() {
        return this.state.name.split('').map((letter, index) => (
            <span className="animatedLetter" key={index}>{letter}</span>
        ));
    }

    applyData(data) {
        this.setState({
            name: data.personal.name,
            selfieUrl: data.personal.selfieUrl,
            selfieAlt: data.site.texts.selfie_alternative,
            signIcon: data.site.texts.arrow_up_icon,
            signText: data.site.texts.selfie_caption,
            proffesions: data.personal.proffesions,
            about: data.personal.about_me
        });
    }

    render() {
        if (this.state.name === "") return null;

        return (
            <section id="landing">
                <div className="left">
                    <img className="selfie" src={this.state.selfieUrl} alt={this.state.selfieAlt} />
                    <div className="sign">
                        <p dangerouslySetInnerHTML={{ __html: this.state.signText }} />
                        <FontAwesomeIcon icon={this.state.signIcon} />
                    </div>
                </div>

                <div className="right">
                    <h1 className="title">{this.getName()}</h1>
                    <ReactTyped className="proffesions" strings={this.state.proffesions} typeSpeed={40} backSpeed={50} backDelay={2000} cursorChar="_" loop />
                    <p className="desc" dangerouslySetInnerHTML={{ __html: this.state.about }} />
                </div>
            </section>
        )
    }
}

export default Landing;