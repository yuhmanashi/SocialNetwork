import * as FriendUtil from '../util/friend_util';

export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

const receiveAllFriends = friends => ({
    type: RECEIVE_ALL_FRIENDS,
    friends
})

const receiveFriend = friend => ({
    type: RECEIVE_FRIEND,
    friend
})

const removeFriend = friendId => ({
    type: REMOVE_FRIEND,
    friendId
})

export const fetchFriends = () => dispatch => (
    FriendUtil.fetchFriends()
        .then(friends => dispatch(receiveAllFriends(friends)))
)

export const fetchFriend = friendId => dispatch => (
    FriendUtil.fetchFriend(friendId)
        .then(friend => dispatch(receiveFriend(friend)))
)

export const createFriend = friend => dispatch => (
    FriendUtil.createFriend(friend)
        .then(friend => dispatch(receiveFriend(friend)))
)

export const updateFriend = friend => dispatch => (
    FriendUtil.updateFriend(friend)
        .then(friend => dispatch(receiveFriend(friend)))
)

export const deleteFriend = friendId => dispatch => (
    FriendUtil.deleteFriend(friendId)
        .then(() => dispatch(removeFriend(friendId)))
)