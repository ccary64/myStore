import {
  OPEN_ITEMS_MODAL,
  CLOSE_ITEMS_MODAL, 
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE
} from '../actions/actionTypes'; 

export default (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        items: payload,
        ...state,
        fetching: false
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        fetching: false
      };
    case OPEN_ITEMS_MODAL:
      return {
        ...state,
        openModal: true,
        modalImage
      };
    case CLOSE_ITEMS_MODAL:
      return {
        ...state,
        openModal: false,
      };
    default:
      return state;
  }
};