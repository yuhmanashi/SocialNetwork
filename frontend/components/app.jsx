import React from 'react';
import LogInContainer from './session/login_container';
import HomeContainer from './home/home_container';
import ModalContainer from './modal/modal_container';
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