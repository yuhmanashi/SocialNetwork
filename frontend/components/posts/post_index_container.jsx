import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { givePostId } from '../../actions/modal_info_actions';

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  allPosts: Object.values(state.entities.posts),
  user_id: state.session.id,
  userPosts: ownProps.userPosts,
  allUsers: state.entities.users
});

const mDTP = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: postId => dispatch(deletePost(postId)),
  openModal: form => dispatch(openModal(form)),
  givePostId: postId => dispatch(givePostId(postId))
});

export default connect(mSTP, mDTP)(PostIndex);