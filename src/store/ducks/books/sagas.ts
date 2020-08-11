import { call, put } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

import * as bookServices from '../../../services/Books';

export function* create(action: ActionType<typeof actions.createRequest>) {
  try {
    const response = yield call(bookServices.create, action.payload);
    yield put(actions.createSuccess(response));
  } catch (err) {
    console.log(err);
  }
}

export function* load() {
  try {
    const response = yield call(bookServices.load);
    yield put(actions.loadSuccess(response));
  } catch (err) {
    console.log(err);
  }
}

export function* save(action: ActionType<typeof actions.saveRequest>) {
  try {
    const response = yield call(bookServices.save, action.payload);
    yield put(actions.saveSuccess(response));
  } catch (err) {
    console.log(err);
  }
}

export function* remove(action: ActionType<typeof actions.removeRequest>) {
  try {
    const response = yield call(bookServices.remove, action.payload);
    yield put(actions.removeSuccess(response));
  } catch (err) {
    console.log(err);
  }
}

export function* sortByTitle() {
  try {
    const response = yield call(bookServices.sortByTitle);
    yield put(actions.sortByTitleSuccess(response));
  } catch (err) {
    console.log(err);
  }
}

export function* sortByDate() {
  try {
    const response = yield call(bookServices.sortByDate);
    yield put(actions.sortByDateSuccess(response));
  } catch (err) {
    console.log(err);
  }
}
