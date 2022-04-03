import { connect } from 'react-redux';
import Profile from './profile';
import { openModal } from '../../actions/modal_actions';
import { fetchUsers, fetchUser } from '../../actions/user_actions'

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    userId: parseInt(ownProps.match.params.userId),
    // currentUser: state.entities.users[state.session.id]
    users: state.entities.users,
    posts: Object.values(state.entities.posts),
    friends: Object.values(state.entities.friends),
})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: form => dispatch(openModal(form))
})

export default connect(mSTP, mDTP)(Profile);