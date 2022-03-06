import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts, user_id, deletePost, openModal, givePostId } = this.props;

    return (
      <div className = "post-box">
        <div onClick={() => this.props.openModal('createpost')} className='createpost'>What's on your mind?</div>
        <ul className="postcontainer"> 
          {
            posts.map(post => (
              <PostIndexItem
                post={post}
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