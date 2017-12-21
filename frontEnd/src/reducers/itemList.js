import {
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
    default:
      return state;
  }
};