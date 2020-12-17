import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import moment from "moment";
import "./Contact.css";

class Contact extends Component {

    state = {
        brand: "",
        copyYear: 0,
        formScale: 1,
        sectionName: "",
        sectionDesc: "",
        contactFormUrl: "",
        socialText: "",
        socials: []
    }

    getCopyrightYear(startYear) {
        const currentYear = moment().year();

        return `${startYear.toString()} ${currentYear > startYear ? `- ${currentYear.toString()}` : ""}`
    }

    applyData(data, id) {
        this.setState({
            brand: data.personal.name,
            copyYear: data.common.copyright,
            sectionName: data.common.sections[id].name,
            sectionDesc: data.common.sections[id].description,
            contactFormUrl: data.common.contactFormUrl,
            socialText: data.common.texts.social_text,
            socials: data.personal.socials
        })
    }

    componentDidMount() {
        window.addEventListener("resize", this.onResize.bind(this));
        this.onResize();
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

        const socials = this.state.socials.map((entry, index) => (
            <a href={entry.link} title={entry.name} key={index}><FontAwesomeIcon icon={["fab", entry.icon]} size="4x" /></a>
        ))

        return (
            <section id="contact">
                <div className="sectionTitle">
                    <h1>{this.state.sectionName}</h1>
                </div>

                <div className="sectionDesc">
                    <p dangerouslySetInnerHTML={{ __html: this.state.sectionDesc }} />

                    <iframe src={this.state.contactFormUrl} title="formContact" className="contactForm" style={{ transform: `scale(${this.state.formScale})` }} />

                    <p className="socialText" dangerouslySetInnerHTML={{ __html: this.state.socialText }}/>

                    <div className="SocialIcons">
                        {socials}
                    </div>
                </div>

                <footer>
                    <div className={`footer-copyright text-center-py-3`}>
                        <FontAwesomeIcon icon={faCopyright} /> {this.getCopyrightYear(this.state.copyYear)} by {this.state.brand}
                    </div>
                </footer>
            </section>
        )
    }
}

export default Contact;