import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import PostIndexContainer from '../posts/post_index_container';
import { Link } from "react-router-dom";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.openModal = this.openModal.bind(this);
        this.handleBio = this.handleBio.bind(this);
        this.handleBirthday = this.handleBirthday.bind(this);
        this.handleFriends = this.handleFriends.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.coverPhotoModal = this.coverPhotoModal.bind(this);
        this.handleCoverPhoto = this.handleCoverPhoto.bind(this);
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
    
    coverPhotoModal(){
        if (this.props.userId === this.props.sessionId) {
            this.props.giveUserId(this.props.userId);
            this.props.openModal('editcoverphoto');
        }
    }

    handleBio(){
        if (!this.props.user.biography) {
            return "Add a bio"
        } else {
            return this.props.user.biography;
        }
    }

    handleBirthday(){
        if (!this.props.user.birthday || this.props.user.birthday === "null") {
            return "Add your birthday"
        } else {
            return this.props.user.birthday;
        }
    }

    handleImage(user){
        if (!user.imageUrl) {
            return <i className="fa-solid fa-circle-user fa-xl"></i>
        } else {
            return <img className="profile-image"src={user.imageUrl} />;
        }
    }

    handleCoverPhoto(){
        let coverPhoto;
        if (!this.props.user.coverPhotoUrl) {
            coverPhoto = ""
        } else {
            coverPhoto = <img className="coverphoto" src={this.props.user.coverPhotoUrl} />;
        }

        return coverPhoto
    }

    handleFriends(){
        const { friends, user, users, userId } = this.props;
        const userFriends = friends.filter(friend => friend.user_id === userId && friend.status === 'true');
        const myFriends = userFriends.map(friend => users[friend.friend_id]);
        
        if (!myFriends[0]) {
            return(
                <div className="friends">
                    <h3>{user.first_name}'s Friends</h3>
                    <hr className="hr1"/>
                    <p>Add some friends!</p>
                </div>
            )
        } else {
            return(
                <div className="friends">
                    <h3>{user.first_name}'s Friends</h3>
                    <hr className="hr1"/>
                    <ul className="friends-container">
                        {
                            myFriends.map((friend, index) => (
                                <li key={index} className="friend-item">
                                    <Link to={`/profile/${friend.id}`}>
                                        <div className="friend">
                                            {this.handleImage(friend)}
                                        </div>
                                        <div className="name">
                                            {friend.first_name} {friend.last_name}
                                        </div>                                    
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
    }

    render(){
        const { user, users, userId, posts, friends } = this.props;
        // const currentUser = users[userId];

        if (!user) return null;
        let userPosts = [];
        
        posts.forEach(post => {
            if (post.author_id === userId) userPosts.push(post);
        })

        const userFriends = friends.filter(friend => friend.user_id === userId && friend.status === 'true');
        return(
            <div className="profile-page">
                <NavBarContainer />
                <div className="page">
                    <div className='profile-head'>
                        <div className="cover">
                            {this.handleCoverPhoto()}              
                        </div>
                        <div className='profile-info'>
                            <div className="profile-content">
                                <div className="profile-picture">
                                    {this.handleImage(user)}
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
                            <div onClick={this.coverPhotoModal} className="editcoverphotobtn">
                                Update Cover Photo
                            </div>
                        </div>
                    </div>

                    <div className="profile-body">
                        <div className="left">
                            <div className="intro">
                                <div className="head">
                                    <h3>Intro</h3>
                                </div>

                                <hr className="hr1"/>

                                <div className="bio">
                                    <p>Bio</p>
                                    <div className="content">
                                        {this.handleBio()}
                                    </div>
                                </div>
                                <div className="birthday">
                                    <p>Birthday</p>
                                    <div className="content">
                                        {this.handleBirthday()}
                                    </div>
                                </div>
                                
                                <hr className="hr2"/>

                                <div className="editbtn" onClick={this.openModal}>
                                    Edit
                                </div>
                            </div>
                            <div className="placehold">
                                <div>
                                    {this.handleFriends()}
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="content">
                                <PostIndexContainer userPosts={userPosts} profile={'true'} profileId={userId}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;