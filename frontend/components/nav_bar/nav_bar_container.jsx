import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logOut } from '../../actions/session_actions';

const mapStateToProps = state => ({
  user: state.session.user,
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);