import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    // this.props.fetchUsers();
  }

  render() {
    const { posts, user_id, deletePost, fetchUser, openModal } = this.props;

    return (
      <div className = "post-box">
        <ul className="postcontainer"> 
          {
            posts.map(post => (
              <PostIndexItem
                post={post}
                user_id={user_id}
                deletePost={deletePost}
                fetchUser={fetchUser}
                openModal={openModal}
                key={post.id}
              />
            ))
          }
        </ul>
        <CreatePostFormContainer />
      </div>
    );
  }
}

export default PostIndex;