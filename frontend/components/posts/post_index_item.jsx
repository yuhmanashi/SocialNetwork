import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.handleDeletePost = this.handleDeletePost.bind(this);
    }

    openModal() {
        console.log(this.props)
        this.props.givePostId(this.props.post.id);
        this.props.openModal('editpost');
    }
    
    handleDropdown(){
        document.getElementById("dropdown-content").classList.toggle("show");
    }
    
    //lets just do hover for now and if theres time do click

    handleDeletePost(){
        if (this.props.user_id === this.props.post.author_id) {
            this.props.deletePost(this.props.post.id);
        };
    }

    handleDate(){
        let AM = 'AM'
        const datetime = this.props.post.created_at
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

    render(){
        return(
            <li className="postitems">
                <div className="head">
                    <div className="name">
                        {this.props.post.first_name} {this.props.post.last_name}
                    </div>
                    <div className="dropdown">
                        <button className="dropbutton"><i className="fa-solid fa-ellipsis"></i></button>
                        <div className="dropdown-content">
                            <div className="edit-button" onClick={this.openModal}>Edit</div>
                            <div className="delete-button" onClick={this.handleDeletePost}>Delete</div>
                        </div>
                    </div>
                </div>
                <div className="datetime">
                    {this.handleDate()}
                </div>
                <div className="body">
                    <p>{this.props.post.body}</p>
                </div>
                <hr className='hr-top'/>
                <div className="likecomment">
                    <i className="fa-regular fa-thumbs-up"> Like </i>
                    <i className="fa-regular fa-message"> Comment </i>
                </div>
                <hr className="hr-bottom" />
                <div className="comments">
                    comments go here
                </div>
                <input type="text" className='comment' placeholder='Write a comment'/>
            </li>
        )
    }
}

export default PostIndexItem;