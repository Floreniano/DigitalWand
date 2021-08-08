import { combineReducers } from 'redux';
import catalogReducer from 'redux/reducers/catalogReducer';
import goodsReducer from 'redux/reducers/cartReducer';
import productReducer from 'redux/reducers/productReducer';
import { appReducer } from 'redux/reducers/appReducer';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  goods: goodsReducer,
  product: productReducer,
  app: appReducer,
});

export default rootReducer;
