import { combineReducers } from 'redux';
import itemList from './itemList';
import cart from './cart';

export default combineReducers({
  itemList,
  cart
});