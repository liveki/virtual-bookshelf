import { call, put } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as commentServices from '../../../services/Comments';
import * as actions from './actions';

export function* loadComments() {
  try {
    const response = yield call(commentServices.load);
    yield put(actions.loadCommentsSuccess(response));
  } catch (err) {
    console.log(err);
  }
}

export function* create(
  action: ActionType<typeof actions.createCommentRequest>
) {
  try {
    const response = yield call(commentServices.create, action.payload);
    yield put(actions.createCommentSuccess(response));
  } catch (err) {
    console.log(err);
  }
}

export function* save(action: ActionType<typeof actions.saveCommentRequest>) {
  try {
    const response = yield call(commentServices.save, action.payload);
    yield put(actions.saveCommentSuccess(response));
  } catch (err) {
    console.log(err);
  }
}

export function* remove(
  action: ActionType<typeof actions.removeCommentRequest>
) {
  try {
    const response = yield call(commentServices.remove, action.payload);
    yield put(actions.removeCommentSuccess(response));
  } catch (err) {
    console.log(err);
  }
}
