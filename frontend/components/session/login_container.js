import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import LogInForm from './login';

const mDTP = dispatch => ({
    logIn: user => dispatch(logIn(user))
})

export default connect(null, mDTP)(LogInForm);