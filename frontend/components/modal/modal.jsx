import React from 'react';
import SignupContainer from '../session/signup_container';
import EditPostContainer from '../posts/edit_post_form_container'
import CreatePostFormContainer from '../posts/create_post_form_container';
import EditCommentFormContainer from '../comments/edit_comment_form_container';
import EditProfileFormContainer from '../profile/edit_profile_form_container';
import EditCoverPhotoFormContainer from '../profile/edit_cover_photo_form_container';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }
    
    close(){
        this.props.closeModal()
    }

    render(){
        const { modal } = this.props

        if (!modal) {
            return null;
        }
          
        let form;
        switch (modal) {
            case 'signup':
                form = <SignupContainer />;
                break;
            case 'createpost':
                form = <CreatePostFormContainer />;
                break;
            case 'editpost':
                form = <EditPostContainer />;
                break;
            case 'editcomment':
                form = <EditCommentFormContainer />;
                break;
            case 'editprofile':
                form = <EditProfileFormContainer />;
                break;
            case 'editcoverphoto':
                form = <EditCoverPhotoFormContainer />;
                break;
            default:
                return null;
        }
          
        return (
            <div className="modal-background" onClick={this.close}>
                <div className={`${modal}-modal-child`} onClick={e => e.stopPropagation()}>
                    { form }
                </div>
            </div>
        );
    }
}

export default Modal;