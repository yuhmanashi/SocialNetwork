import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logOut } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  userId: state.session.id,
  entities: state.session.entities
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);