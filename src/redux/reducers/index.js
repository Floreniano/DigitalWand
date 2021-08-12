import { combineReducers } from 'redux';
import catalogReducer from 'redux/reducers/catalogReducer';
import usersReducer from 'redux/reducers/usersReducer';
import goodsReducer from 'redux/reducers/cartReducer';
import productReducer from 'redux/reducers/productReducer';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  users: usersReducer,
  goods: goodsReducer,
  product: productReducer,
});

export default rootReducer;
