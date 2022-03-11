import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUsers } from '../../actions/user_actions'

const mSTP = state => ({
    userId: state.session.id,
    // currentUser: state.entities.users[state.session.id]
    users: state.entities.users,
    posts: Object.values(state.entities.posts),
    friends: Object.values(state.entities.friends),
})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(Profile);