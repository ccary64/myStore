import {
  FETCH_ALL_CATEGORIES_REQUEST,
  FETCH_ALL_CATEGORIES_SUCCESS,
  FETCH_ALL_CATEGORIES_FAILURE,
  FETCH_CATEGORY_BY_ID_REQUEST,
  FETCH_CATEGORY_BY_ID_SUCCESS,
  FETCH_CATEGORY_BY_ID_FAILURE
} from '../actions/actionTypes'; 

export default (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_ALL_CATEGORIES_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case FETCH_ALL_CATEGORIES_SUCCESS:
      return {
        items: payload,
        ...state,
        fetching: false
      };
    case FETCH_ALL_CATEGORIES_FAILURE:
      return {
        ...state,
        fetching: false
      };
    case FETCH_CATEGORY_BY_ID_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case FETCH_CATEGORY_BY_ID_SUCCESS:
      return {
        products: payload,
        ...state,
        fetching: false
      };
    case FETCH_CATEGORY_BY_ID_FAILURE:
      return {
        ...state,
        fetching: false
      };
    default:
      return state;
  }
};