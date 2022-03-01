import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
    session: SessionReducer,
});

export default RootReducer;

// errors: ErrorsReducer,
// entities: EntitiesReducer