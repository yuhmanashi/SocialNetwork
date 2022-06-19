import { connect } from 'react-redux';
import Like from './like'
import { fetchLikes, createLike, deleteLike } from '../../util/like_util';

const mSTP = (state, ownProps) => ({
    userId: state.session.id,
    postId: ownProps.postId
})

const mDTP = dispatch => ({
    fetchLikes: () => dispatch(fetchLikes()),
    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId))
})

export default connect(mSTP, mDTP)(Like);