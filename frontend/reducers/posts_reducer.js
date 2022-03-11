import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_USERS } from '../actions/user_actions';

const PostsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, nextState, action.payload.posts)
        case RECEIVE_ALL_POSTS:
            return action.posts
        case RECEIVE_POST:
            nextState[action.post.id] = action.post
            return nextState;
        case REMOVE_POST:
            delete nextState[action.postId];
            return nextState;
        default:
            return state;
    }
}

export default PostsReducer;