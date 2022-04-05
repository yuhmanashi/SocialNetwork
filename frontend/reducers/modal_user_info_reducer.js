import { GIVE_USER_ID } from '../actions/modal_info_actions';

const ModalUserInfoReducer = (state = null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case GIVE_USER_ID:
            return action.userId;
        default:
            return state;
    }
}

export default ModalUserInfoReducer;