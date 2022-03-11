import { combineReducers } from "redux";
import UsersReducer from './users_reducer';
import PostsReducer from "./posts_reducer";
import CommentsReducer from "./comments_reducer";
import FriendsReducer from "./friends_reducer";

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    posts: PostsReducer,
    comments: CommentsReducer,
    friends: FriendsReducer,
});

export default EntitiesReducer;