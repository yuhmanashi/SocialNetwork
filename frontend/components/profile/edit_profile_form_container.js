import { connect } from "react-redux";
import EditProfileForm from './edit_profile_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';

const mSTP = state => ({
    user: state.entities.users[ownProps.match.params.userId],
});

const mDTP = dispatch => ({
    updateUser: user => dispatch(updateUser(user)),
});

export default connect(mSTP, mDTP)(EditProfileForm);