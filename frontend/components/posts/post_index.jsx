import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  render() {

    const { allPosts, userPosts, user_id, deletePost, openModal, givePostId, currentUser, allUsers } = this.props;
    
    let posts;
    if (userPosts) {
      posts = userPosts
    } else {
      posts = allPosts
    }

    return (
      <div className="post-box">
        <div className="create-post-box">
          <div className='userprofile-placeholder'>
            <i className="fa-solid fa-circle-user fa-xl"></i>
          </div>
          <div onClick={() => this.props.openModal('createpost')} className='create-post'>What's on your mind?</div>
        </div>
        <ul className="postcontainer">
          {
            posts.reverse().map(post => (
              <PostIndexItem
                post={post}
                allUsers={allUsers}
                user_id={user_id}
                deletePost={deletePost}
                givePostId={givePostId}
                openModal={openModal}
                key={post.id}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default PostIndex;