import { connect } from 'react-redux';
import Home from './home'
import { logOut } from '../../actions/session_actions';

const mDTP = dispatch => {
    return { logOut: () => dispatch(logOut()) }
}

export default connect(null, mDTP)(Home);