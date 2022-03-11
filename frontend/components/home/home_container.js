import { connect } from 'react-redux';
import Home from './home'
import { logOut } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => {
    return { 
        logOut: () => dispatch(logOut()),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mSTP, mDTP)(Home);