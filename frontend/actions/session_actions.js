import * as SessionUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS'

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const removeErrors = () => ({
    type: REMOVE_SESSION_ERRORS
});

export const signUp = user => dispatch => (
    SessionUtil.signUp(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveErrors(error.responseJSON))
        )
);

export const logIn = user => dispatch => (
    SessionUtil.logIn(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveErrors(error.responseJSON))
        )
);

export const logOut = () => dispatch => (
    SessionUtil.logOut()
        .then(() => dispatch(logoutCurrentUser()))
);