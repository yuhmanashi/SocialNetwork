import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import FriendIndexItems from './friend_index_item';

class Friends extends React.Component {
    componentDidMount(){
        this.props.fetchFriends();
        this.props.fetchUsers();
    }

    render(){
        const { allUsers, currentUser, createFriend, deleteFriend, updateFriend, userId, friends } = this.props;
        
        if (!friends) return null;

        let userFriendsId = [] 
        friends.forEach(friend => {if (friend.user_id === userId && friend.status === 'true') userFriendsId.push(friend.friend_id)});
        const userFriends = allUsers.filter(user => 
            userFriendsId.includes(user.id) && user.id != userId
        )

        let userFriendships = friends.filter(friend => friend.friend_id === userId)

        let requestSentId = []
        friends.forEach(friend => {if (friend.user_id === userId && friend.status === 'sent') requestSentId.push(friend.friend_id)});
        const requestSent = allUsers.filter(user => 
            requestSentId.includes(user.id) && user.id != userId
        )

        let requestedId = []
        friends.filter(friend => {if (friend.user_id === userId && friend.status === 'requested') requestedId.push(friend.friend_id)});
        const requested = allUsers.filter(user => 
            requestedId.includes(user.id) && user.id != userId
        )
        
        let friendIds = [];
        
        console.log(userFriends)
        console.log(requestSent)
        console.log(requested)

        userFriendsId.forEach(friendId => {
            friendIds.push(friendId)
        })

        userFriendships.forEach(friendship => {
            friendIds.push(friendship.user_id)
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
                                            userFriendships={userFriendships}
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
                        <h3>Friend Requests</h3>
                        <div>
                            <ul className="friends">
                                {
                                    requested.map((friend, index) => (
                                        <FriendIndexItems 
                                            user={currentUser}
                                            userFriendships={userFriendships}
                                            friend={friend}
                                            userId={userId} 
                                            deleteFriend={deleteFriend}
                                            updateFriend={updateFriend}
                                            type="Requested"
                                            key={index}
                                        />
                                    ))
                                }
                            </ul>
                        </div>
                        <h3>Request Sent</h3>
                        <div>
                            <ul className="friends">
                                {
                                    requestSent.map((friend, index) => (
                                        <FriendIndexItems 
                                            user={currentUser}
                                            userFriendships={userFriendships}
                                            friend={friend}
                                            userId={userId} 
                                            action={deleteFriend}
                                            type="Cancel Request"
                                            key={index}
                                        />
                                    ))
                                }
                            </ul>
                        </div>
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