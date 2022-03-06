export const GIVE_POST_ID = "GIVE_POST_ID";
export const GIVE_USER = "GIVE_USER";

export const givePostId = postId => ({
    type: GIVE_POST_ID,
    postId
})