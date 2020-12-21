import MDSpinner from "react-md-spinner";
import "./Preloader.css";
import { API_SERVER } from "../config";
const { Component } = require("react");

class Preloader extends Component {

    state = {
        loaded: false,
        addClass: ""
    }

    componentDidMount() {
        fetch(`${API_SERVER}/portfolio/common`)
            .then(response => response.json())
            .then(data => {
                this.props.handler("common", data);
                this.hidePreloader();
            })
            .catch((error) => {
                this.props.handler("crash");
            });
        
        window.addEventListener("beforeunload", this.onBeforeUnload.bind(this));
    }

    hidePreloader() {
        this.setState({ loaded: true });
        setTimeout(() => this.setState({ addClass: "hidden" }), 500);
    }

    onBeforeUnload() {
        this.setState({
            loaded: false,
            addClass: ""
        });
    }

    render() {
        return (
            <div className={`preloader ${this.state.loaded ? "loaded" : ""} ${this.state.addClass}`}>
                <MDSpinner size={64} />
                <h1 className="text">Please wait...</h1>
            </div>
        )
    }
}

export default Preloader;