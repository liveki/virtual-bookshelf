import { action } from 'typesafe-actions';
import { BooksTypes, Book } from './types';
import { BookDTO } from '../../../services/Books';

export const loadRequest = () => action(BooksTypes.LOAD_REQUEST);

export const loadSuccess = (data: Book[]) =>
  action(BooksTypes.LOAD_SUCCESS, data);

export const createRequest = (data: BookDTO) =>
  action(BooksTypes.CREATE_REQUEST, data);

export const createSuccess = (data: Book) =>
  action(BooksTypes.CREATE_SUCCESS, data);
