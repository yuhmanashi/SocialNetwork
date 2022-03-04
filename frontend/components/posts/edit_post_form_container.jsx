import { connect } from 'react-redux';
import EditPostForm from './edit_post_form';
import { fetchPost, updatePost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.postId],
  formType: 'Update Post'
});

const mDTP = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  action: post => dispatch(updatePost(post)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EditPostForm);