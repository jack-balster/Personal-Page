import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main, ProjectPage } from './pages';
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';

import './App.css';

function App() {
    const { theme } = useContext(ThemeContext);  // Access theme from ThemeContext

    return (
        <div className="app" style={{ backgroundColor: theme.secondary, color: theme.tertiary }}>
            <Router>
                {/* Ensure the page scrolls to the top on route change */}
                <ScrollToTop />
                <Switch>
                    {/* Define routes for the main and projects pages */}
                    <Route path="/" exact component={Main} />
                    <Route path="/projects" exact component={ProjectPage} />

                    {/* Redirect any unknown routes to the main page */}
                    <Redirect to="/" />
                </Switch>
            </Router>
            {/* Back to Top button component */}
            <BackToTop />
        </div>
    );
}

export default App;
