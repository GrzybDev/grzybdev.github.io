import { faBars, faCode, faDog, faHome, faIdCard, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {

    state = {
        navbarStatus: "",
        navbarTransparency: ""
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll.bind(this));
    }

    handleScroll() {
        let scrollTop = window.pageYOffset;

        if (scrollTop !== 0 && this.state.navbarTransparency !== "focus") {
            this.setState({ navbarTransparency: "focus" });
        } else if (scrollTop === 0) {
            this.setState({ navbarTransparency: "" })
        }
    }

    toggleNavbar() {
        if (this.state.navbarStatus !== "active")
            this.setState({ navbarStatus: "active" });
        else
            this.setState({ navbarStatus: "" });
    }

    render() {
        return (
            <nav className={this.state.navbarTransparency}>
                <ul>
                    <li className={`sections ${this.state.navbarStatus}`}>
                        <a href="#landing">
                            <FontAwesomeIcon icon={faHome} />
                            Home
                        </a>
                        <a href="#landing">
                            <FontAwesomeIcon icon={faStar} />
                            Experience
                        </a>
                        <a href="#landing">
                            <FontAwesomeIcon icon={faCode} />
                            Projects
                        </a>
                        <a href="#landing">
                            <FontAwesomeIcon icon={faIdCard} />
                            Contact
                        </a>
                        <a href="#landing">
                            <FontAwesomeIcon icon={faDog} />
                            Resume
                        </a>
                    </li>
                    <li className="branding">
                        <a href="#landing">
                            Marek Grzyb
                        </a>
                    </li>
                    <li className={`hamburger ${this.state.navbarStatus}`} onClick={() => this.toggleNavbar()}>
                        <FontAwesomeIcon icon={faBars}/>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;