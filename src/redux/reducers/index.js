import { combineReducers } from 'redux';
import catalogReducer from 'redux/reducers/catalogReducer';
import cardReducer from 'redux/reducers/cardReducer';
import goodsReducer from 'redux/reducers/cartReducer';
import { appReducer } from './appReducer';

const rootReducer = combineReducers({
  app: appReducer,
  catalog: catalogReducer,
  card: cardReducer,
  goods: goodsReducer,
});

export default rootReducer;
