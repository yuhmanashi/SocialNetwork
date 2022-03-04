import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.handleDeletePost = this.handleDeletePost.bind(this);
    }

    openModal() {
        console.log(this.props)
        this.props.openModal('editpost');
    }
    
    handleDropdown(){
        document.getElementById("dropdown-content").classList.toggle("show");
    }
    
    handleDeletePost(){
        if (this.props.user_id === this.props.post.author_id) {
            this.props.deletePost(this.props.post.id);
        };
    }

    render(){
        return(
            <li className="postitems">
                <div className="head">
                    <p>User: {this.props.post.author_id}</p>
                    <div className="dropdown">
                        <button onClick={this.handleDropdown} className="dropbutton"><i className="fa-solid fa-ellipsis"></i></button>
                        <div id="dropdown-content" className="dropdown-content">
                            <div className="edit-button" onClick={this.openModal}>Edit</div>
                            <button onClick={this.handleDeletePost}>Delete</button>
                        </div>
                    </div>
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
                <input type="text" className='comment' placeholder='Write a comment'/>
            </li>
        )
    }
}

export default PostIndexItem;