import { connect } from 'react-redux';
import { signUp, removeErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import SignUpForm from './signup';

const mSTP = state => ({
    errors: state.errors.session
})

const mDTP = dispatch => ({
    signUp: user => dispatch(signUp(user)),
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(SignUpForm);