import { faUserAltSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import "./Contact.css";

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="sectionTitle">
                    <h1>Contact</h1>
                </div>

                <div className="sectionDesc">
                    <p dangerouslySetInnerHTML={{ __html: "Lorem ipsum" }} />

                    <div className="SocialIcons">
                        <a href="#test" title="type"><FontAwesomeIcon icon={faUserAltSlash} size="4x" /></a>
                    </div>
                </div>

                <footer>
                    <div className={`footer-copyright text-center-py-3`}>
                        &copy;  by Marek Grzyb
                    </div>
                </footer>
            </section>
        )
    }
}

export default Contact;