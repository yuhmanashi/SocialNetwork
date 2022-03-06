import { connect } from 'react-redux';
import EditPostForm from './edit_post_form';
import { fetchPost, updatePost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => {
  return {
  post: state.entities.posts[state.ui.postId],
  postId: state.ui.postId,
  formType: 'Update Post'
}};

const mDTP = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  action: post => dispatch(updatePost(post)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EditPostForm);