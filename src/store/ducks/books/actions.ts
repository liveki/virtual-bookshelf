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

export const saveRequest = (data: Book) =>
  action(BooksTypes.UPDATE_REQUEST, data);

export const saveSuccess = (data: Book[]) =>
  action(BooksTypes.UPDATE_SUCCESS, data);

export const removeRequest = (id: string) =>
  action(BooksTypes.REMOVE_REQUEST, id);

export const removeSuccess = (data: Book[]) =>
  action(BooksTypes.REMOVE_SUCCESS, data);

export const sortByTitleASCRequest = () =>
  action(BooksTypes.SORT_BY_TITLE_ASC_REQUEST);

export const sortByTitleASCSuccess = (data: Book[]) =>
  action(BooksTypes.SORT_BY_TITLE_ASC_SUCCESS, data);

export const sortByTitleDESCRequest = () =>
  action(BooksTypes.SORT_BY_TITLE_DESC_REQUEST);

export const sortByTitleDESCSuccess = (data: Book[]) =>
  action(BooksTypes.SORT_BY_TITLE_DESC_SUCCESS, data);

export const sortByDateASCRequest = () =>
  action(BooksTypes.SORT_BY_DATE_ASC_REQUEST);

export const sortByDateASCSuccess = (data: Book[]) =>
  action(BooksTypes.SORT_BY_DATE_ASC_SUCCESS, data);

export const sortByDateDESCRequest = () =>
  action(BooksTypes.SORT_BY_DATE_DESC_REQUEST);

export const sortByDateDESCSuccess = (data: Book[]) =>
  action(BooksTypes.SORT_BY_DATE_DESC_SUCCESS, data);
