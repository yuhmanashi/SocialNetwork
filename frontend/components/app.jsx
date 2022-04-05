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
        <AuthRoute exact path="/" component={LogInContainer} />
        <ProtectedRoute exact path="/home" component={HomeContainer} />
        <ProtectedRoute exact path="/friends" component={FriendsContainer} />
        <ProtectedRoute exact path="/profile/:userId" component={ProfileContainer} />
    </div>
)

export default App;