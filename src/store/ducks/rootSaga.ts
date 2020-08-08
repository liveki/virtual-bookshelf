import { all, takeLatest } from 'redux-saga/effects';

import { CategoriesTypes } from './categories/types';
import { load } from './categories/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(CategoriesTypes.LOAD_REQUEST, load)]);
}
