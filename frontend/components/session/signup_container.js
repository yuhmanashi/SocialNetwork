import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SignUpForm from './signup';

const mDTP = dispatch => ({
    signUp: user => dispatch(signUp(user))
})

export default connect(null, mDTP)(SignUpForm);