import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import LogInForm from './login';

const mSTP = state => ({
    user: {
        email: "",
        password: ""
    },
    errors: state.errors.session
})

const mDTP = dispatch => ({
    logIn: user => dispatch(logIn(user))
})

export default connect(mSTP, mDTP)(LogInForm);