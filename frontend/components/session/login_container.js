import { connect } from 'react-redux';
import { logIn, removeErrors } from '../../actions/session_actions';
import LogInForm from './login';
import { openModal } from '../../actions/modal_actions'

const mSTP = state => ({
    errors: state.errors.session
})

const mDTP = dispatch => ({
    logIn: user => dispatch(logIn(user)),
    openModal: form => dispatch(openModal(form)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(LogInForm);