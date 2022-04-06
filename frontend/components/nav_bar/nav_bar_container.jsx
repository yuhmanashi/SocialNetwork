import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logOut } from '../../actions/session_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  userId: state.session.id,
  friends: state.entities.friends
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);