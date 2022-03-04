import React from 'react';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import HomeContainer from './home/home_container';
import ModalContainer from './modal/modal_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <ModalContainer />
        <AuthRoute path="/" component={LogInContainer} />
        <ProtectedRoute path="/home" component={HomeContainer} />
    </div>
)

export default App;