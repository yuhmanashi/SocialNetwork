import React from 'react';
import LogInContainer from './session/login_container';
import HomeContainer from './home/home_container';
import ModalContainer from './modal/modal_container';
import FriendsContainer from './friends/friends_container';
import ProfileContainer from './profile/profile_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <ModalContainer />
        <AuthRoute path="/" component={LogInContainer} />
        <ProtectedRoute path="/home" component={HomeContainer} />
        <ProtectedRoute path="/friends" component={FriendsContainer} />
        <ProtectedRoute path="/profile/:userId" component={ProfileContainer} />
    </div>
)

export default App;