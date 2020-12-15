import MDSpinner from "react-md-spinner";
import "./Preloader.css";
const { Component } = require("react");

class Preloader extends Component {

    state = {
        loaded: false,
        addClass: ""
    }

    componentDidMount() {
        this.setState({loaded: true});
        setTimeout(this.hidePreloader.bind(this), 500);
    }

    hidePreloader() {
        this.setState({addClass: "hidden"});
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