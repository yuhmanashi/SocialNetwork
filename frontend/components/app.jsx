import React from 'react';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import Splash from './splash/splash';
import Home from './home/home';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <AuthRoute path="/" component={LogInContainer} />
        <AuthRoute path="/signup" component={SignUpContainer} />
        <ProtectedRoute path="/home" component={Home} />
    </div>
)

export default App;