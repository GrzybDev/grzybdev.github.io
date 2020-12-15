import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTyped from 'react-typed';
import "./Landing.css";

const { Component } = require("react");

class Landing extends Component {

    getName() {
        return "Marek Grzyb".split('').map((letter, index) => (
            <span className="animatedLetter" key={index}>{letter}</span>
        ));
    }

    render() {
        return (
            <section id="landing">
                <div className="left">
                    <img className="selfie" src="#TODO" alt="My selfie" />
                    <div className="sign">
                        <p>It's me!&nbsp;&nbsp;&nbsp;</p>
                        <FontAwesomeIcon icon={faLevelUpAlt} />
                    </div>
                </div>

                <div className="right">
                    <h1 className="title">{this.getName()}</h1>
                    <ReactTyped className="proffesions" strings={["Lorem ipsum", "Ipsum sum"]} typeSpeed={40} backSpeed={50} backDelay={2000} cursorChar="_" loop/>
                    <p className="desc" dangerouslySetInnerHTML={{ __html: "Lorem ipsum" }} />
                </div>
            </section>
        )
    }
}

export default Landing;