import { call, put } from 'redux-saga/effects';
import { createRequest, createSuccess, loadSuccess } from './actions';
import { ActionType } from 'typesafe-actions';

import * as bookServices from '../../../services/Books';

export function* create(action: ActionType<typeof createRequest>) {
  try {
    const response = yield call(bookServices.create, action.payload);
    yield put(createSuccess(response));
  } catch (err) {
    console.log(err);
  }
}

export function* load() {
  try {
    const response = yield call(bookServices.load);
    yield put(loadSuccess(response));
  } catch (err) {
    console.log(err);
  }
}
