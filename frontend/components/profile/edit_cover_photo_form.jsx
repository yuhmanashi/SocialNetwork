import React from "react";

class EditCoverPhotoForm extends React.Component {
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
            
            // imageUrl: "",
            // imageFile: null,
            coverPhotoUrl: "",
            coverPhoto: null,
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }
    
    handleFile(e){
        e.preventDefault();
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        
        reader.onloadend = () => this.setState({ coverPhotoUrl: reader.result, coverPhoto: file })
        
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ coverPhotoUrl: "", coverPhoto: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const form = new FormData();
        form.append('user[id]', this.state.id);

        if (this.state.coverPhoto) {
            form.append('user[cover_photo]', this.state.coverPhoto);
        }

        this.props.action(form).then(this.props.closeModal());
    }
    
    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render(){
        if (!this.props) return null;
        const { closeModal } = this.props;

        return(
            <div className='editprofileformcontainer'>
                <div className='form-header'>
                    <h3>Edit Cover Photo</h3>
                    <div onClick={closeModal} className="close-x">X</div>
                </div>
                <form>
                    <input 
                        className='coverphoto'
                        type='file'
                        onChange={this.handleFile}
                    />
                    <div className='profilebtn' onClick={this.handleSubmit}>Update Cover Photo</div>
                </form>
            </div>
        )
    }
}

export default EditCoverPhotoForm;