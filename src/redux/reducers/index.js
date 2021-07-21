import { combineReducers } from 'redux';
import postsReducer from 'redux/reducers/posts';
import commentsReducer from 'redux/reducers/comments';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

export default rootReducer;
