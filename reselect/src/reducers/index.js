import { combineReducers } from 'redux';
import posts from './posts';
import selectedPostIds from './selected_posts';

const rootReducer = combineReducers({
    posts,
    selectedPostIds
});

export default rootReducer;
