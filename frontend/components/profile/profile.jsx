import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import PostIndexContainer from '../posts/post_index_container';

class Profile extends React.Component {
    render(){
        if (!this.props) return null;
        const { users, userId, posts, friends } = this.props;
        const currentUser = users[userId];
        
        let userPosts = [];
        
        posts.forEach(post => {
            if (post.author_id === userId) userPosts.push(post);
        })

        let userFriends = friends.filter(friend => friend.user_id === userId)

        return(
            <div className="profile-page">
                <NavBarContainer />
                <div className="page">
                    <div className='profile-head'>
                        <div className="cover">                    
                        </div>
                        <div className='profile-info'>
                            <div className="userprofile-placeholder">
                                <i className="fa-solid fa-circle-user fa-xl"></i>
                            </div>
                            <div className='namefriends'>
                                <div className='name'>
                                    {currentUser.first_name} {currentUser.last_name}
                                </div>
                                <div className="number-friends">
                                    {`${userFriends.length} Friends`}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-body">
                        <div className="left">
                            <div className="intro">
                                <h3>Intro</h3>
                                <div className="bio">
                                    <p>Bio</p>
                                    {currentUser.biography}
                                </div>
                                <div className="birthday">
                                    <p>Birthday</p>
                                    {currentUser.birthday}
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="content">
                                <PostIndexContainer userPosts={userPosts} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;