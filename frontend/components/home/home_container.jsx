import { connect } from 'react-redux';
import Home from './home'
import { getUser } from '../../actions/user_actions';
import { logOut } from '../../actions/session_actions';

const mSTP = state => ({
    user: state.session.user,
})

const mDTP = dispatch => ({
    getUser: userId => dispatch(getUser(userId)),
    logOut: () => dispatch(logOut())
})

export default connect(mSTP, mDTP)(Home);