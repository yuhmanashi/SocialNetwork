import React from 'react';
import PostForm from './post_form';

class EditPostForm extends React.Component {
  render() {
    const { action, formType, post, closeModal } = this.props;

    if (!post) return null;
    return (
      <PostForm
        closeModal={closeModal}
        action={action}
        formType={formType}
        post={post} />
    );
  }
}

export default EditPostForm;