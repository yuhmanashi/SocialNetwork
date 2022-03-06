import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { givePostId } from '../../actions/modal_info_actions';

const mSTP = state => ({
  posts: Object.values(state.entities.posts),
  user_id: state.session.id
});

const mDTP = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: postId => dispatch(deletePost(postId)),
  openModal: form => dispatch(openModal(form)),
  givePostId: postId => dispatch(givePostId(postId))
});

export default connect(mSTP, mDTP)(PostIndex);