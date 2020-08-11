import { combineReducers } from 'redux';

import books from './books';
import categories from './categories';
import comments from './comments';

export default combineReducers({
  books,
  categories,
  comments,
});
