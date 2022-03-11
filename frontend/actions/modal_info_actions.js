export const GIVE_POST_ID = "GIVE_POST_ID";
export const GIVE_COMMENT_ID = "GIVE_USER";

export const givePostId = postId => ({
    type: GIVE_POST_ID,
    postId
})

export const giveCommentId = commentId => ({
    type: GIVE_COMMENT_ID,
    commentId
})