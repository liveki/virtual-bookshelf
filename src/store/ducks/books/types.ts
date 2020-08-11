import { Category } from '../categories/types';

export enum BooksTypes {
  LOAD_REQUEST = '@books/LOAD_REQUEST',
  LOAD_SUCCESS = '@books/LOAD_SUCCESS',
  CREATE_REQUEST = '@books/CREATE_REQUEST',
  CREATE_SUCCESS = '@books/CREATE_SUCCESS',
  UPDATE_REQUEST = '@books/UPDATE_REQUEST',
  UPDATE_SUCCESS = '@books/UPDATE_SUCCESS',
  REMOVE_REQUEST = '@books/REMOVE_REQUEST',
  REMOVE_SUCCESS = '@books/REMOVE_SUCCESS',
  SORT_BY_TITLE_ASC_REQUEST = '@books/SORT_BY_TITLE_ASC_REQUEST',
  SORT_BY_TITLE_ASC_SUCCESS = '@books/SORT_BY_TITLE_ASC_SUCCESS',
  SORT_BY_TITLE_DESC_REQUEST = '@books/SORT_BY_TITLE_DESC_REQUEST',
  SORT_BY_TITLE_DESC_SUCCESS = '@books/SORT_BY_TITLE_DESC_SUCCESS',
  SORT_BY_DATE_ASC_REQUEST = '@books/SORT_BY_DATE_ASC_REQUEST',
  SORT_BY_DATE_ASC_SUCCESS = '@books/SORT_BY_DATE_ASC_SUCCESS',
  SORT_BY_DATE_DESC_REQUEST = '@books/SORT_BY_DATE_DESC_REQUEST',
  SORT_BY_DATE_DESC_SUCCESS = '@books/SORT_BY_DATE_DESC_SUCCESS',
}

export interface Book {
  id: string;
  created_at: number;
  title: string;
  description: string;
  author: string;
  category: Category;
  deleted: boolean;
  img_url?: string;
}

export interface BooksState {
  readonly data: Book[];
  readonly loading: boolean;
  readonly error: boolean;
}
