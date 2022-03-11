import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_USERS } from '../actions/user_actions';

const CommentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, nextState, action.payload.comments)
        case RECEIVE_ALL_COMMENTS:
            return action.comments
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;
        default:
            return state;
    }
}

export default CommentsReducer;