import { combineReducers } from 'redux';
import postsReducer from 'redux/reducers/posts';
import commentsReducer from 'redux/reducers/comments';
import { appReducer } from 'redux/reducers/appReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  app: appReducer,
});

export default rootReducer;
