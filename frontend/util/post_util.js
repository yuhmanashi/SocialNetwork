export const fetchPosts = () => (
    $.ajax({
        method: 'GET',
        url: 'api/posts'
    })
);

export const fetchPost = postId => (
    $.ajax({
        method: 'GET',
        url: `api/posts/${postId}`
    })
)

export const createPost = post => (
    $.ajax({
        method: 'POST',
        url: `api/posts`,
        data: { post },
    })
);

export const updatePost = post => {
    return $.ajax({
        method: 'PATCH',
        url: `api/posts/${post.id}`,
        data: { post },
    })
}

export const deletePost = postId => (
    $.ajax({
        method: 'DELETE',
        url: `api/posts/${postId}`
    })
)