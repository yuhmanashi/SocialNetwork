import { connect } from 'react-redux';
import FriendForm from './friend_form';
import { createFriend } from '../../actions/friend_actions';

const mSTP = state => ({
    friend: { 
        user_id: state.session.id,
        friend_id: "" 
    }
});

const mDTP = dispatch => ({
    action: friend => dispatch(createFriend(friend)),
});

export default connect(mSTP, mDTP)(FriendForm);