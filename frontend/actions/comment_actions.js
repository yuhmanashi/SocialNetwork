import * as CommentUtil from '../util/comment_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveAllComments = comments => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
})

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

export const fetchComments = () => dispatch => (
    CommentUtil.fetchComments()
        .then(comments => dispatch(receiveAllComments(comments)))
)

export const fetchComment = commentId => dispatch => (
    CommentUtil.fetchComment(commentId)
        .then(comment => dispatch(receiveComment(comment)))
)

export const createComment = comment => dispatch => (
    CommentUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
)

export const updateComment = comment => dispatch => (
    CommentUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
)

export const deleteComment = commentId => dispatch => (
    CommentUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
)