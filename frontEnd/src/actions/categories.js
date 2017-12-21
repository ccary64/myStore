import { 
  FETCH_CATEGORY_BY_ID,
  FETCH_ALL_CATEGORIES
} from './actionTypes';

export const fetchById = (categoryId) => {
  return {
    types: FETCH_CATEGORY_BY_ID,
    api: { url: `/categories/${categoryId}` }
  }
};

export const fetchAll = () => {
  return {
    types: FETCH_ALL_CATEGORIES,
    api: { url: '/categories' }
  }
};