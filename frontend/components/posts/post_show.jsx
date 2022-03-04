import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        <p>{post.body}</p>
        <Link to="/" />
      </div>
    );
  }
}

export default PostShow;