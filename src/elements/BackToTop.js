import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import "./BackToTop.css";

class BackToTop extends Component {

    state = {
        icon: "",
        visibility: ""
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll.bind(this));
    }

    handleScroll() {
        let scrollTop = window.pageYOffset;

        if (scrollTop !== 0) {
            this.setState({ visibility: "visible" });
        } else {
            this.setState({ visibility: "" })
        }
    }

    applyData(data) {
        this.setState({
            icon: data.site.texts.back_to_top_icon
        });
    }

    render() {
        if (this.state.icon === "") return null;

        return <FontAwesomeIcon icon={this.state.icon} className={`BackToTop ${this.state.visibility}`} size="2x" onClick={() => window.scrollTo(0, 0)} />
    }
}

export default BackToTop;