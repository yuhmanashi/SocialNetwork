import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_USERS } from "../actions/user_actions";

const LikesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, nextState, action.payload.likes)
        case RECEIVE_LIKES:
            return action.likes
        case RECEIVE_LIKE:
            nextState[action.like.id] = action.like
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.likeId];
            return nextState;
        default:
            return state;
    }
}

export default LikesReducer;