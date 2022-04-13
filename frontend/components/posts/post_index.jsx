import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props){
    super(props);
    this.handlePosts = this.handlePosts.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleProfileImage = this.handleProfileImage.bind(this);
  }

  handlePosts(){
    const { allPosts, userPosts, user_id, deletePost, openModal, givePostId, allUsers, profile } = this.props;
    let posts;
    if (profile && !userPosts[0]) {
      return (
        <div className='no-posts'>
          <br />
          <p>No posts found. Add some posts!</p>
        </div>
      )
    } else if (userPosts) {
      posts = userPosts
    } else {
      posts = allPosts
    }

    return(
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
    )
  }

  openModal(){
    const { user_id, profile, profileId } = this.props;
    if (profile && user_id === profileId) { 
      this.props.openModal('createpost')
    } else if (!profile) {
      this.props.openModal('createpost')
    }
  }

  handleProfileImage(){
    const { currentUser } = this.props;
    let img = <i className="fa-solid fa-circle-user fa-xl"></i>;

    if (currentUser?.imageUrl) {
      img = <img className="profile-image" src={currentUser.imageUrl} />;
    }

    return img
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="post-box">
        <div className="create-post-box">
          <div className='user'>
            {this.handleProfileImage()}
          </div>
          <div onClick={this.openModal} className='create-post'>What's on your mind?</div>
        </div>
        {this.handlePosts()}
      </div>
    );
  }
}

export default PostIndex;