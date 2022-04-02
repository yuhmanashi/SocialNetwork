import React from 'react';

class FriendIndexItems extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
        this.handleReject = this.handleReject.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const { friend, action, type, userId } = this.props;
        let requestSent = {'user_id': userId, 'friend_id': friend.id, 'status': 'sent'}
        let friendRequest = {'user_id': friend.id, 'friend_id': userId, 'status': 'requested'}
        if (type === 'Delete Friend'){
            action(friend.id)
        } else {
            action(requestSent).then(action(friendRequest))
        }
    }

    handleAccept(e) {
        e.preventDefault();
        const { friend, action, type, userId } = this.props;
    }

    handleReject(e) {
        e.preventDefault();
        const { friend, action, type, userId } = this.props;
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
                    <div onClick={this.handleClick} className={`${type}`}>{type}</div>
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
        const { friend, type } = this.props;
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
                                {friend.first_name} {friend.last_name}
                            </div>
                            <div className="friendaction">
                                <div onClick={this.handleClick} className={`${type}`}>{type}</div>
                            </div>
                        </div>
                </li>
            )
        }
}

export default FriendIndexItems;