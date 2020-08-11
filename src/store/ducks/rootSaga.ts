import { all, takeLatest } from 'redux-saga/effects';

import { CategoriesTypes } from './categories/types';
import { BooksTypes } from './books/types';
import { CommentsTypes } from './comments/types';
import * as categoryActions from './categories/sagas';
import * as bookActions from './books/sagas';
import * as commentActions from './comments/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.LOAD_REQUEST, categoryActions.load),
    takeLatest(BooksTypes.CREATE_REQUEST, bookActions.create),
    takeLatest(BooksTypes.LOAD_REQUEST, bookActions.load),
    takeLatest(BooksTypes.UPDATE_REQUEST, bookActions.save),
    takeLatest(BooksTypes.REMOVE_REQUEST, bookActions.remove),
    takeLatest(BooksTypes.SORT_BY_TITLE_REQUEST, bookActions.sortByTitle),
    takeLatest(BooksTypes.SORT_BY_DATE_REQUEST, bookActions.sortByDate),
    takeLatest(CommentsTypes.CREATE_COMMENT_REQUEST, commentActions.create),
    takeLatest(CommentsTypes.SAVE_COMMENT_REQUEST, commentActions.save),
    takeLatest(
      CommentsTypes.LOAD_COMMENTS_REQUEST,
      commentActions.loadComments
    ),
    takeLatest(CommentsTypes.REMOVE_COMMENT_REQUEST, commentActions.remove),
  ]);
}
