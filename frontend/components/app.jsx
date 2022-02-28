import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import Splash from './splash/splash';
import HomeContainer from './home/home_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Route path="/" component={NavBarContainer}/>
        <Route exact path="/" component={Splash}/>
        <AuthRoute path="/login" component={LogInContainer} />
        <AuthRoute path="/signup" component={SignUpContainer} />
        <ProtectedRoute path="/home" component={HomeContainer} />
    </div>
)

export default App;