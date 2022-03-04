import React from 'react';
import PostForm from './post_form';

class EditPostForm extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    const { action, formType, post } = this.props;

    // Hint: The post will not exist on the first render - what do we need to do
    // to get it?
    if (!post) return null;
    return (
      <PostForm
        action={action}
        formType={formType}
        post={post} />
    );
  }
}

export default EditPostForm;