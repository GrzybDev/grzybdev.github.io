import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {

    state = {
        brand: "",
        entries: [],
        hamburgerIcon: "",
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
        } else if (scrollTop === 0 && this.state.navbarStatus !== "active") {
            this.setState({ navbarTransparency: "" })
        }
    }

    toggleNavbar() {
        if (this.state.navbarStatus !== "active")
            this.setState({ navbarStatus: "active", navbarTransparency: "focus" });
        else
            this.setState({ navbarStatus: "" });
    }

    applyData(data) {
        this.setState({
            brand: data.personal.name,
            entries: data.site.sections,
            hamburgerIcon: data.site.texts.hamburger_icon
        });
    }

    render() {
        const entries = this.state.entries.map((value, index) => (
            <li key={index}>
                <a href={value.url}>
                    <FontAwesomeIcon icon={value.icon} />
                    {value.name}
                </a>
            </li>
        ));

        if (this.state.brand === "" || this.state.brand === null) return null;

        return (
            <nav className={this.state.navbarTransparency}>
                <ul className={`sections ${this.state.navbarStatus}`}>
                    {entries}
                    <li className="branding">
                        <a href="#landing">
                            {this.state.brand}
                        </a>
                    </li>
                    <li className={`hamburger ${this.state.navbarStatus}`} onClick={() => this.toggleNavbar()}>
                        <FontAwesomeIcon icon={this.state.hamburgerIcon} />
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;