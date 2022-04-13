import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetCommentInput = this.resetCommentInput.bind(this);
    this.handleProfileImage = this.handleProfileImage.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(this.resetCommentInput());
  }

  resetCommentInput(){
    this.state.body = "";
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

  render() {
    return (
      <div className="commentform">
        <div className='user'>
          {this.handleProfileImage()}
        </div>
        <form onSubmit={this.handleSubmit}>
            <input
              className="createcomment"
              value={this.state.body}
              onChange={this.update('body')}
              placeholder="Write a comment"
            />
        </form>
      </div>
    );
  }
}

export default CommentForm;