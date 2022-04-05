import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import PostIndexContainer from '../posts/post_index_container';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.openModal = this.openModal.bind(this);
        this.handleDate = this.handleDate.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchUsers();
    }

    openModal() {
        if (this.props.userId === this.props.sessionId) {
            this.props.giveUserId(this.props.userId);
            this.props.openModal('editprofile');
        }
    }

    handleDate(){
        const datetime = this.props.user.birthday
        if (!datetime) return null;
        const year = datetime.slice(0,4);
        const month = datetime.slice(5,7);
        const day = datetime.slice(8,10);
        return `${month}/${day}/${year}`
    }

    render(){
        const { user, users, userId, posts, friends } = this.props;
        // const currentUser = users[userId];
        if (!user) return null;
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
                                    {user.first_name} {user.last_name}
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
                                <div className="head">
                                    <h3>Intro</h3>
                                </div>
                                <div className="bio">
                                    <p>Bio</p>
                                    {user.biography}
                                </div>
                                <div className="birthday">
                                    <p>Birthday</p>
                                    {this.handleDate()}
                                </div>
                                <br />
                                <div className="editbtn" onClick={this.openModal}>
                                        Edit
                                </div>
                            </div>
                            <div className="placehold">
                                <div>
                                    Hi
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