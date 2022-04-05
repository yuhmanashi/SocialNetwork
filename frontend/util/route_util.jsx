import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mSTP = state => {
    return {
    loggedIn: Boolean(state.session.id)}
};

const Auth = ({ loggedIn, path, component: Component, exact }) => (
    <Route 
        path={path}
        exact={exact}
        render={props => (
            !loggedIn ? <Component {...props} /> : <Redirect to="/home" />
        )}
    />
);

const Protected = ({ loggedIn, path, component: Component, exact }) => (
    <Route 
        path={path}
        exact={exact}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
);

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));