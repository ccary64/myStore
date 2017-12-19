import { 
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART
} from './actionTypes';

export const addToCart = (item) => {
  return {
    type: ADD_ITEM_TO_CART,
    item
  }
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    itemId
  }
};