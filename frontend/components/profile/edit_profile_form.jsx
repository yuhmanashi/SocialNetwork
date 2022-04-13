import React from "react";

class EditProfileForm extends React.Component {
    constructor(props){
        super(props);
        const { user } = this.props;

        this.state = {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,

            biography: user.biography,
            birthday: user.birthday,
            
            imageUrl: "",
            imageFile: null,
            // coverPhotoUrl: "",
            // coverPhotoFile: null,
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleBirthday = this.handleBirthday.bind(this);
    }
    
    handleFile(e){
        e.preventDefault();
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        
        reader.onloadend = () => this.setState({ imageUrl: reader.result, imageFile: file })
        
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const form = new FormData();
        form.append('user[id]', this.state.id);
        form.append('user[biography]', this.state.biography);
        form.append('user[birthday]', this.state.birthday);

        if (this.state.imageFile) {
            form.append('user[photo]', this.state.imageFile);
        }

        this.props.action(form).then(this.props.closeModal());
    }
    
    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleBirthday(){
        if (this.state.birthday === 'null' || !this.state.birthday) {
            return ""
        } else {
            return this.state.birthday
        }
    }

    render(){
        if (!this.props) return null;
        const { closeModal } = this.props;

        return(
            <div className='editprofileformcontainer'>
                <div className='form-header'>
                    <h3>Edit Profile</h3>
                    <div onClick={closeModal} className="close-x">X</div>
                </div>
                <form className='edit-profile-form'>
                    <p>Bio</p>
                    <textarea
                        className="biography"
                        value={this.state.biography}
                        onChange={this.update('biography')}
                    />

                    <p>Birthday</p>
                    <input
                        className='birthday'
                        value={this.handleBirthday()}
                        onChange={this.update('birthday')}
                    />

                    <p>Profile Picture</p>
                    <input 
                        className='image'
                        type='file'
                        onChange={this.handleFile}
                    />
                    <div className='profilebtn' onClick={this.handleSubmit}>Update Profile</div>
                </form>
            </div>
        )
    }
}

export default EditProfileForm;