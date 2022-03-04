import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';

const mSTP = (state, ownProps) => ({
  post: state.entities.posts[ownProps.match.params.postId]
});

const mDTP = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId))
});

export default connect(mSTP, mDTP)(PostShow);