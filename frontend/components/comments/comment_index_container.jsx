import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments, deleteComment } from '../../actions/comment_actions';
import { giveCommentId } from '../../actions/modal_info_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  user: state.entities.users[state.session.id],
  comments: Object.values(state.entities.comments),
  user_id: state.session.id,
  post_id: ownProps.postId,
  users: state.entities.users
});

const mDTP = dispatch => ({
  fetchComments: () => dispatch(fetchComments()),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  giveCommentId: commentId => dispatch(giveCommentId(commentId)),
  openModal: form => dispatch(openModal(form)),
});

export default connect(mSTP, mDTP)(CommentIndex);