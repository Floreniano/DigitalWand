import { combineReducers } from 'redux';
import catalogReducer from 'redux/reducers/catalogReducer';
import goodsReducer from 'redux/reducers/cartReducer';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  goods: goodsReducer,
});

export default rootReducer;
