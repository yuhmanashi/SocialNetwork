import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(this.props.closeModal)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <div className='form-header'>
          <h3>{this.props.formType}</h3>
          <div onClick={this.props.closeModal} className="close-x">X</div>
        </div>
        <form onSubmit={this.handleSubmit}>
            <input
              className="createpost"
              value={this.state.body}
              onChange={this.update('body')}
              placeholder="What's on your mind?"
            />
        </form>
      </div>
    );
  }
}

export default PostForm;
