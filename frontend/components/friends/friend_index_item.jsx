import React from 'react';
import { Link } from 'react-router-dom';

class FriendIndexItems extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
        this.handleReject = this.handleReject.bind(this);
        this.handleFriendAction = this.handleFriendAction.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const { friend, action, type, userId, userFriendships } = this.props;
        let requestSent = {'user_id': userId, 'friend_id': friend.id, 'status': 'sent'}
        let friendRequest = {'user_id': friend.id, 'friend_id': userId, 'status': 'requested'}
        if (userFriendships){
            console.log('delete')
            let friendship = userFriendships.filter(requested => requested.friend_id === userId && requested.user_id === friend.friend_id)
            action(friend.id).then(action(friendship[0].id));
        } else {
            console.log('create')
            action(requestSent).then(action(friendRequest))
        }
    }

    handleAccept(e) {
        console.log('accept')
        e.preventDefault();
        const { friend, updateFriend, type, userId, userFriendships } = this.props;
        let friendship = userFriendships.filter(requested => requested.friend_id === userId && requested.user_id === friend.friend_id)
        friendship[0].status = 'true';
        friend.status = 'true';
        console.log(friend)
        console.log(friendship)
        updateFriend(friend).then(updateFriend(friendship[0]));
    }

    handleReject(e) {
        console.log('reject')
        e.preventDefault();
        const { friend, deleteFriend, type, userId, userFriendships } = this.props;
        let friendship = userFriendships.filter(requested => requested.friend_id === userId && requested.user_id === friend.friend_id)
        deleteFriend(friend.id).then(deleteFriend(friendship[0].id));
    }

    update(friend_id) {
        return () => this.setState({ 'friend_id': friend_id });
    }

    // handleAction(user){
    //     if (this.props.type === 'deletefriend'){
    //         this.props.action(user.id)
    //     } else {
    //         this.update(user.id).then(this.handleSubmit())
    //     }
    // }

    handleFriendAction(){
        const { type } = this.props;
        if (type === 'Requested') {
            return(
                <div className="friendaction">
                    <div onClick={this.handleAccept} className='Accept'>Accept Friend</div>
                    <div onClick={this.handleReject} className='Reject'>Reject</div>
                </div>
            )
        } else {
            return(
                <div className="friendaction">
                    <div onClick={this.handleClick} className={`${type}`}>{type}</div>
                </div>
        )}
    }

    render(){
        const { friend, users, type } = this.props;
        let user;
        if (type === 'Add Friend'){
            user = users[friend.id - 1]
        } else {
            user = users[friend.friend_id - 1]
        }
        if (!user) return null;
        // if ( type === "addfriend" && user.id != userId && Object.keys(userFriends).includes(friend.id)) {
            return(
                <li className="friend-item">
                        <div className="profilepic">
                            <div className="userprofile-placeholder">
                                <i className="fa-solid fa-user-large fa-xl"></i>
                            </div>
                        </div>
                        <div className='body'>
                            <div className="name">
                                {user.first_name} {user.last_name}
                            </div>
                            {this.handleFriendAction()}
                        </div>
                </li>
            )
        }
}

export default FriendIndexItems;