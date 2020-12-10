import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTyped from 'react-typed';
import selfie from '../assets/selfie.jpg';
import "./Landing.css";

const { Component } = require("react");

class Landing extends Component {
    render() {
        return (
            <section id="landing">
                <div class="left">
                    <img className="selfie" src={selfie} alt="My selfie" />
                    <div className="sign">
                        <p>It's me!&nbsp;&nbsp;&nbsp;</p>
                        <FontAwesomeIcon icon={faLevelUpAlt} />
                    </div>
                </div>

                <div class="right">
                    <h1 className="title">Marek Grzyb</h1>
                    <ReactTyped strings={["Lorem ipsum", "Ipsum sum"]} typeSpeed={40} backSpeed={50} backDelay={1000} cursorChar="_" loop/>
                    <p className="desc" dangerouslySetInnerHTML={{ __html: "Lorem ipsum" }} />
                </div>
            </section>
        )
    }
}

export default Landing;