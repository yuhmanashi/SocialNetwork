import { connect } from 'react-redux';
import Likes from './likes'
import { fetchLikes, createLike, deleteLike } from '../../util/like_util';

const mSTP = state => ({
    userId: state.session.id
})

const mDTP = dispatch => ({
    fetchLikes: () => dispatch(fetchLikes()),
    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId))
})

export default connect(mSTP, mDTP)(Likes);