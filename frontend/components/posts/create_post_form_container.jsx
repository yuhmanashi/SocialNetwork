import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
    post: { 
        body: '',
        author_id: state.session.id 
    },
    formType: 'Create Post'
});

const mDTP = dispatch => ({
    action: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(PostForm);