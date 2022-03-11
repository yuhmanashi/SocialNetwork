import React from 'react';
import CommentForm from './comment_form';

class EditCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(this.props.closeModal());
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }
  
  render() {
        const { comment, formType, closeModal } = this.props;

        if (!comment) return null;
        return (
          <div>
            <div className='form-header'>
              <h3>{formType}</h3>
              <div onClick={closeModal} className="close-x">X</div>
            </div>
            <form onSubmit={this.handleSubmit}>
              <input
                className="createcomment"
                value={this.state.body}
                onChange={this.update('body')}
              />
            </form>
          </div>
        );
      }
}

export default EditCommentForm;