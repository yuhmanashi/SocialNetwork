import { connect } from 'react-redux';
import Home from './home'
import { fetchUser } from '../../actions/user_actions';
import { logOut } from '../../actions/session_actions';

const mSTP = state => ({
    currentUserId: state.session.id,
    users: state.entities.users
})

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    logOut: () => dispatch(logOut())
})

export default connect(mSTP, mDTP)(Home);