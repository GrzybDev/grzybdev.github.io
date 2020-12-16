import { faCopyright, faUserAltSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import moment from "moment";
import "./Contact.css";

class Contact extends Component {

    state = {
        formScale: 1
    }

    getCopyrightYear(startYear) {
        const currentYear = moment().year();

        return `${startYear.toString()} ${currentYear > startYear ? `- ${currentYear.toString()}` : ""}`
    }

    componentDidMount() {
        window.addEventListener("resize", this.onResize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize.bind(this));
    }

    onResize() {
        if (window.innerWidth <= 534) {
            this.setState({ formScale: window.innerWidth / 534 })
        } else {
            this.setState({ formScale: 1 })
        }
    }

    render() {
        return (
            <section id="contact">
                <div className="sectionTitle">
                    <h1>Contact</h1>
                </div>

                <div className="sectionDesc">
                    <p dangerouslySetInnerHTML={{ __html: "Lorem ipsum" }} />

                    <iframe src="http://localhost:8080/form/portfolio" title="formContact" className="contactForm" style={{ transform: `scale(${this.state.formScale})` }} />

                    <p className="socialText">Lorem ipsum</p>

                    <div className="SocialIcons">
                        <a href="#test" title="type"><FontAwesomeIcon icon={faUserAltSlash} size="4x" /></a>
                    </div>
                </div>

                <footer>
                    <div className={`footer-copyright text-center-py-3`}>
                        <FontAwesomeIcon icon={faCopyright} /> {this.getCopyrightYear(2020)} by Marek Grzyb
                    </div>
                </footer>
            </section>
        )
    }
}

export default Contact;