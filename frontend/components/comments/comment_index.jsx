import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    const { comments, user_id, deleteComment, post_id, giveCommentId, openModal, users } = this.props;

    return (
        <ul className="commentcontainer"> 
          {
            comments.map(comment => (
              <CommentIndexItem
                comment={comment}
                users={users}
                post_id={post_id}
                user_id={user_id}
                deleteComment={deleteComment}
                giveCommentId={giveCommentId}
                openModal={openModal}
                key={comment.id}
              />
            ))
          }
        </ul>
    );
  }
}

export default CommentIndex;