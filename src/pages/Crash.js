import { faSadCry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import "./Crash.css";

class Crash extends Component {

    constructor(props) {
        super(props);

        this.reason = this.props.reason;
        this.desc = this.props.desc;
    }

    render() {
        if (!(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
            if (window.location.pathname !== "/")
                setTimeout(() => window.location.replace(), 1000 * 10);
            else
                setTimeout(() => window.location.reload(), 1000 * 10);
        }

        var errorDesc = "";

        switch (this.reason) {
            case "failedToConnect":
                errorDesc = "There was an error trying to contact my backend services."
                break;
            case "badResponse":
                errorDesc = "My backend service returned bad response."
                break;
            case "renderError":
                errorDesc = "There was an error trying to render some component.";
                break;
            case "backendError":
                errorDesc = this.desc;
                break;
            default:
                errorDesc = "Unknown error."
                break;
        }

        return (
            <main className="crash">
                <FontAwesomeIcon icon={faSadCry} size="4x" />
                <h1>Oh no! Something terrible happened!</h1>
                <p>{`${errorDesc}${this.reason === "backendError" ? "" : " Please try again later."}`}</p>
                { window.location.pathname !== "/" ? <p>You'll return to my home page in 10 seconds...</p> : <p>This page will automatically refresh after 10 seconds...</p>}
            </main>
        )
    }
}

export default Crash;