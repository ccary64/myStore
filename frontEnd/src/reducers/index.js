import { combineReducers } from 'redux';
import itemList from './itemList';
import cart from './cart';
import categories from './categories';

export default combineReducers({
  itemList,
  cart,
  categories
});