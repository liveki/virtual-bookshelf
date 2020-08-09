import { all, takeLatest } from 'redux-saga/effects';

import { CategoriesTypes } from './categories/types';
import { BooksTypes } from './books/types';
import * as categoryActions from './categories/sagas';
import * as bookActions from './books/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.LOAD_REQUEST, categoryActions.load),
    takeLatest(BooksTypes.CREATE_REQUEST, bookActions.create),
    takeLatest(BooksTypes.LOAD_REQUEST, bookActions.load),
  ]);
}
