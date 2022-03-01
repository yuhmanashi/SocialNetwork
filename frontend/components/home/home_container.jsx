import { connect } from 'react-redux';
import Home from './home'
import { getUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    userId: parseInt(ownProps.match.params.userId),
})

const mDTP = dispatch => ({
    getUser: userId => dispatch(getUser(userId))
})

export default connect(mSTP, mDTP)(Home);