import { faCopyright, faUserAltSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import moment from "moment";
import "./Contact.css";

class Contact extends Component {

    state = {
        csrfToken: ""
    }

    getCopyrightYear(startYear) {
        const currentYear = moment().year();

        return `${startYear.toString()} ${currentYear > startYear ? `- ${currentYear.toString()}` : ""}`
    }

    render() {
        return (
            <section id="contact">
                <div className="sectionTitle">
                    <h1>Contact</h1>
                </div>

                <div className="sectionDesc">
                    <p dangerouslySetInnerHTML={{ __html: "Lorem ipsum" }} />

                    <form method="POST" action="/test">
                        <input type="hidden" name="_csrf" value={this.state.csrfToken} />

                        <div className="formGroup">
                            <div class="form-input name">
                                <label>
                                    <input type="text" required name="name" />
                                    <span class="placeholder">Name</span>
                                </label>
                            </div>
                            <div class="form-input">
                                <label>
                                    <input type="text" required name="lastname" />
                                    <span class="placeholder">Last name</span>
                                </label>
                            </div>
                        </div>

                        <div class="form-input">
                            <label>
                                <input type="text" required name="title" />
                                <span class="placeholder">Title</span>
                            </label>
                        </div>

                        <div class="form-input message">
                            <label>
                                <textarea rows="10" required name="message"/>
                                <span class="placeholder message">Message</span>
                            </label>
                        </div>

                        <input type="submit" className="submitBtn" />
                    </form>

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