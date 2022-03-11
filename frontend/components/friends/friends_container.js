import { connect } from 'react-redux';
import Friends from './friends'
import { fetchFriends, createFriend, deleteFriend } from '../../actions/friend_actions'
import { fetchUsers } from '../../actions/user_actions'
import { withRouter } from 'react-router-dom';

const mSTP = state => {
    return {
    userId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    allUsers: Object.values(state.entities.users),
    friends: Object.values(state.entities.friends)
}}

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()), 
    fetchFriends: () => dispatch(fetchFriends()),
    createFriend: friend => dispatch(createFriend(friend)),
    deleteFriend: friendId => dispatch(deleteFriend(friendId))
})

export default withRouter(connect(mSTP, mDTP)(Friends));