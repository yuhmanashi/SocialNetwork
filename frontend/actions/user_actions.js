import * as UserUtil from '../util/user_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const getUser = userId => dispatch => (
    UserUtil.getUser(userId)
        .then(user => dispatch(receiveUser(user)))
)

export const updateUser = user => dispatch => (
    UserUtil.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
)