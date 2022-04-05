import { connect } from "react-redux";
import EditProfileForm from './edit_profile_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';

const mSTP = state => ({
    user: state.entities.users[state.ui.userId],
    userId: state.ui.userId,
    formType: 'Update Profile'
});

const mDTP = dispatch => ({
    action: user => dispatch(updateUser(user)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EditProfileForm);