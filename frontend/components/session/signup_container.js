import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SignUpForm from './signup';

const mSTP = state => ({
    errors: state.errors
})

const mDTP = dispatch => ({
    signUp: user => dispatch(signUp(user))
})

export default connect(mSTP, mDTP)(SignUpForm);