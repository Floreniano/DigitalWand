import { combineReducers } from 'redux';
import catalogReducer from 'redux/reducers/catalogReducer';
import goodsReducer from 'redux/reducers/cartReducer';
import productReducer from 'redux/reducers/productReducer';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  goods: goodsReducer,
  product: productReducer,
});

export default rootReducer;
