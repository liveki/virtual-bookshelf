import { call, put, SagaReturnType } from 'redux-saga/effects';
import LoadCategories from '../../../services/LoadCategories';
import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(LoadCategories);
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
