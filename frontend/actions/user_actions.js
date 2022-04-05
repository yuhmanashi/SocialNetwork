import * as UserUtil from '../util/user_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = payload => {
    return ({
    type: RECEIVE_USERS,
    payload
})}

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const fetchUsers = () => dispatch => {
    return (
    UserUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
)}

export const fetchUser = userId => dispatch => (
    UserUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
)

export const updateUser = user => dispatch => {
    console.log(user);
    return (
    UserUtil.updateUser(user)
        .then(userInfo => {
            console.log(userInfo);
            dispatch(receiveUser(userInfo))})
)}