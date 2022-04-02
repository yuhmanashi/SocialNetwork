import { connect } from 'react-redux';
import MenuBar from './menu_bar';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUserId: state.session.id,
  users: state.entities.users,
  user: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);