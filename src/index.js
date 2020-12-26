import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import App from './pages/App';
import "./index.css";
import ProjectSite from './pages/Project';
import { FirebaseAppProvider, SuspenseWithPerf, useAnalytics } from 'reactfire';
import Preloader from './elements/Preloader';
import "firebase/analytics";
import { firebaseConfig } from './config';

function PageViewLogger({ location }) {
    const analytics = useAnalytics();

    // By passing `location.pathname` to the second argument of `useEffect`,
    // we only log on first render and when the `pathname` changes
    useEffect(() => {
        analytics.logEvent('page-view', { path_name: location.pathname });
    }, [analytics, location.pathname]);

    return null;
}

function Main() {
    useAnalytics();

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/project/:id">
                    <SuspenseWithPerf fallback={<Preloader withoutBackend={true} />} traceId={"load-project-site"}>
                        <ProjectSite />
                    </SuspenseWithPerf>
                </Route>

                <Route path="*">
                    <SuspenseWithPerf fallback={<Preloader withoutBackend={true} />} traceId={"load-main-site"}>
                        <App />
                    </SuspenseWithPerf>
                </Route>

                <PageViewLogger />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <SuspenseWithPerf fallback={<Preloader withoutBackend={true} />} traceId={"init"}>
                <Main />
            </SuspenseWithPerf>
        </FirebaseAppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);