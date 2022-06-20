import React from 'react';
import CreateLikeFormContainer from './create_like_container';

class Like extends React.Component {
    constructor(props){
        super(props);
        this.handleLike = this.handleLike.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleLike(){
        let status = 'Liked'
        return <i className="fa-solid fa-thumbs-up"><div className="liked">{status}</div></i>
    }

    handleClick(e){
        e.preventDefault();
        const { postId, userId, createLike, deleteLike } = this.props;
        let data = {'user_id': userId, 'post_id': postId};
        // check if user has liked post
        // for now just make sure liking works
        createLike(data)
    }

    render(){
        return(
            <div className="like-button" onClick={this.handleClick}>
                {this.handleLike()}
            </div>
        )
    }
}

export default Like;