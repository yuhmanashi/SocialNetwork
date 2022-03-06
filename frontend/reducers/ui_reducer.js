import { combineReducers } from 'redux';
import ModalInfoReducer from './modal_info_reducer';
import ModalReducer from './modal_reducer';

 const UIReducer = combineReducers({
    modal: ModalReducer,
    postId: ModalInfoReducer
});

export default UIReducer;