import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import FriendIndexItems from './friend_index_item';

class Friends extends React.Component {
    componentDidMount(){
        this.props.fetchFriends();
    }

    render(){
        const { allUsers, currentUser, createFriend, deleteFriend, userId, friends } = this.props;
        
        if (!friends) return null;

        //only shows who user has friended, not user as a friendee
        let userFriends = friends.filter(friend => friend.user_id === userId)
        let friendIds = [];
        
        userFriends.forEach(friend => {
            friendIds.push(friend.friend_id)
        })
        
        let notFriends = allUsers.filter(user => 
            !friendIds.includes(user.id) && user.id != userId
        )

        return(
            <div className='friendpage'>
                <NavBarContainer />
                <div className='page'>
                    {/* <div className='sidebar'>
                        <ul>
                            <li>Home</li>
                            <li>Friends</li>
                            <li>Suggestions</li>
                        </ul>
                    </div> */}
                    <div className="content">
                        <h3>{currentUser.first_name}'s Friends</h3>
                        <div className="your-friends">
                            <ul className="friends">
                                {
                                    userFriends.map((friend, index) => (
                                        <FriendIndexItems 
                                            user={currentUser}
                                            friend={friend}
                                            userId={userId} 
                                            action={deleteFriend}
                                            type="Delete Friend"
                                            key={index}
                                        />
                                    ))
                                }
                            </ul>
                        </div>
                        <hr className="hr-top"/>
                        <h3>People You May Know</h3>
                        <div className="recommended-friends">
                            <ul className='friends'>
                                {
                                    notFriends.map((friend, index) => (
                                        <FriendIndexItems 
                                            user={currentUser}
                                            friend={friend}
                                            userId={userId} 
                                            action={createFriend}
                                            type="Add Friend"
                                            key={index}
                                        />
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Friends