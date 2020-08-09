import { call, put } from 'redux-saga/effects';
import { load as loadCategories } from '../../../services/Categories';
import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(loadCategories);
    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}
