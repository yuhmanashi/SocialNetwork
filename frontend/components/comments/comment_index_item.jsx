import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
        this.openModal = this.openModal.bind(this);
        this.handleProfileImage = this.handleProfileImage.bind(this);
    }
    
    openModal() {
        if (this.props.user_id === this.props.comment.author_id) {
            this.props.giveCommentId(this.props.comment.id);
            this.props.openModal('editcomment');
        }
    }

    handleDeleteComment(){
        if (this.props.user_id === this.props.comment.author_id) {
            this.props.deleteComment(this.props.comment.id);
        };
    }

    handleDate(){
        let AM = 'AM'
        const datetime = this.props.comment.created_at
        const monthes = {'01': 'January', '02': 'February', '03': 'March', '04': 'April', '05': 'May', '06': 'June', '07': 'July', '08': 'August', '09': 'September', '10': 'October', '11': 'November', '12': 'December' }
        const month = monthes[datetime.slice(5,7)]
        let day = datetime.slice(8,10)
        if (day[0] === '0') day = day[1];
        let hour = parseInt(datetime.slice(11,13))
        if (hour > 12) {
            hour = hour - 12;
            AM = 'PM';
        }
        const minutes = datetime.slice(13,16)
        return `${month} ${day} at ${hour}${minutes} ${AM}`
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleProfileImage(){
        const { comment, users } = this.props;
        const user = users[comment.author_id]
        if (!user.imageUrl) {
            return <i className="fa-solid fa-circle-user fa-xl"></i>
        } else {
            return <img className="profile-image" src={user.imageUrl} />;
        }
    }

    render(){
        const { comment, post_id, users } = this.props;

        let firstName;
        let lastName;

        if (!this.props.comment.first_name) {
            let user = users[comment.author_id];
            firstName = user.first_name;
            lastName = user.last_name;
        } else {
            firstName = comment.first_name;
            lastName = comment.last_name;
        }

        if (comment.post_id === post_id) {
            return(
                <div className="comment-items">
                    <div className="comment-body">
                        <div className="user">
                            <Link to={`/profile/${comment.author_id}`}>
                                {this.handleProfileImage()}
                            </Link>
                        </div>
                        <div className="comment-box">
                            <div className="head">
                                <Link to={`/profile/${comment.author_id}`}>
                                    <div className="name">
                                        {firstName} {lastName}
                                    </div>
                                </Link>
                            </div>
                            <div className="comment">
                                {comment.body}
                            </div>
                        </div>
                        <div className="dropdown">
                            <div className="dropbutton"><i className="fa-solid fa-ellipsis"></i></div>
                            <div className="dropdown-content">
                                <div className="edit-button" onClick={this.openModal}>Edit</div>
                                <div className="delete-button" onClick={this.handleDeleteComment}>Delete</div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="likereplydate">
                        <div className="like">Like</div>
                        <div className="reply">Reply</div>
                        <div className="datetime">{this.handleDate()}</div>
                    </div> */}
                    {/* <div className="child-comments">
                    </div> */}
                </div>
        )} else {
            return ""
        }
    }
}

export default CommentIndexItem;