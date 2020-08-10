import { action } from 'typesafe-actions';
import { CommentDTO } from '../../../services/Comments';
import { CommentsTypes, Comment } from './types';

export const loadCommentsRequest = () =>
  action(CommentsTypes.LOAD_COMMENTS_REQUEST);

export const loadCommentsSuccess = (data: Comment[]) =>
  action(CommentsTypes.LOAD_COMMENTS_SUCCESS, data);

export const createCommentRequest = (comment: CommentDTO) =>
  action(CommentsTypes.CREATE_COMMENT_REQUEST, comment);

export const createCommentSuccess = (comment: Comment) =>
  action(CommentsTypes.CREATE_COMMENT_SUCCESS, comment);

export const saveCommentRequest = (comment: Comment) =>
  action(CommentsTypes.SAVE_COMMENT_REQUEST, comment);

export const saveCommentSuccess = (data: Comment[]) =>
  action(CommentsTypes.SAVE_COMMENT_SUCCESSS, data);

export const removeCommentRequest = (comment: Comment) =>
  action(CommentsTypes.REMOVE_COMMENT_REQUEST, comment);

export const removeCommentSuccess = (data: Comment[]) =>
  action(CommentsTypes.REMOVE_COMMENT_SUCCESS, data);
