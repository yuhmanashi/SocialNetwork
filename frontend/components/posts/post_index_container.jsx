import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { givePostId } from '../../actions/modal_info_actions';
import { fetchLikes, createLike, deleteLike } from '../../util/like_util';

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  allPosts: Object.values(state.entities.posts),
  user_id: state.session.id,
  userPosts: ownProps.userPosts,
  allUsers: state.entities.users,
  profile: ownProps.profile,
  profileId: ownProps.profileId
});

const mDTP = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: postId => dispatch(deletePost(postId)),
  openModal: form => dispatch(openModal(form)),
  givePostId: postId => dispatch(givePostId(postId)),
  fetchLikes: () => dispatch(fetchLikes()),
  createLike: like => dispatch(createLike(like)),
  deleteLike: likeId => dispatch(deleteLike(likeId))
});

export default connect(mSTP, mDTP)(PostIndex);