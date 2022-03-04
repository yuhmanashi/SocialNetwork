import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions'

const mSTP = state => ({
  posts: Object.values(state.entities.posts),
  user_id: state.session.id
});

const mDTP = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: postId => dispatch(deletePost(postId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchUsers: () => dispatch(fetchUsers()),
  openModal: form => dispatch(openModal(form)),
});

export default connect(mSTP, mDTP)(PostIndex);