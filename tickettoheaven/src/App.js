import React, { Component, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import './Css/App.css';

// import logo from './logo.svg';
const ViewError = React.lazy(() =>
    import(/* webpackChunkName: "views-error" */ './components/error')
);
const MainRoute = React.lazy(() =>
    import(/* webpackChunkName: "views-error" */ './components/Main/MainRoute')
);
const TicketToHeaven = React.lazy(() =>
    import(/* webpackChunkName: "views-error" */ './components/Main/MainComponent/MainComponent')
);

function App() {
  return (
    <div className="App">
        <Suspense fallback={<div className="loading" />}>
            <Router>
                <Switch>
                    {/*<AuthRoute*/}
                        {/*path="/app"*/}
                        {/*authUser={loginUser}*/}
                        {/*component={ViewApp}*/}
                    {/*/>*/}
                    {/*<Route*/}
                        {/*path="/user"*/}
                        {/*render={props => <ViewUser {...props} />}*/}
                    {/*/>*/}
                    <Route
                        path="/error"
                        exact
                        render={props => <ViewError {...props} />}
                    />
                    <Route
                        path="/"
                        exact
                        render={props => <MainRoute {...props} />}
                    />
                    <Route
                        path="/ticket-to-heaven"
                        exact
                        render={props => <TicketToHeaven {...props} />}
                    />
                    <Redirect to="/error" />
                </Switch>
            </Router>
        </Suspense>
    </div>
  );
}

export default App;
