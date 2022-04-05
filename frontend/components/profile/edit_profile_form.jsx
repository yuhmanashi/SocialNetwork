import React from "react";

class EditProfileForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(this.props.closeModal());
    }
    
    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
    
    render(){
        if (!this.props) return null;
        const { formType, closeModal } = this.props;
        return(
            <div className='editprofileformcontainer'>
                <div className='form-header'>
                    <h3>{formType}</h3>
                    <div onClick={closeModal} className="close-x">X</div>
                </div>
                <form>
                    <input
                        className="biography"
                        value={this.state.biography}
                        onChange={this.update('biography')}
                    />
                    <input
                        type="date"
                        min="1900-01-01"
                        className="birthday"
                        value={this.state.birthday}
                        onChange={this.update('birthday')}
                    />
                    <button className='profilebtn' onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default EditProfileForm;