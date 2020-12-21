import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import App from './pages/App';
import "./index.css";
import ProjectSite from './pages/Project';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/project/:id">
                    <ProjectSite />
                </Route>

                <Route path="*">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);