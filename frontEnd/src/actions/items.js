import { 
  FETCH_ITEMS_BY_ID,
  FETCH_ITEMS,
  OPEN_ITEMS_MODAL,
  CLOSE_ITEMS_MODAL
} from './actionTypes';

export const fetchById = (itemId) => {
  return {
    types: FETCH_ITEMS_BY_ID,
    api: { url: `/items/${itemId}` }
  }
};

export const fetchAll = (items) => {
  return {
    types: FETCH_ITEMS,
    api: { url: '/items' }
  }
};

export const openModal = (modalImage) => {
  console.log(modalImage);
  return {
    type: OPEN_ITEMS_MODAL,
    modalImage
  }
};

export const closeModal = () => ({ type: CLOSE_ITEMS_MODAL });
