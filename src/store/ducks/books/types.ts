import { Category } from '../categories/types';

export enum BooksTypes {
  LOAD_REQUEST = '@books/LOAD_REQUEST',
  LOAD_SUCCESS = '@books/LOAD_SUCCESS',
  CREATE_REQUEST = '@books/CREATE_REQUEST',
  CREATE_SUCCESS = '@books/CREATE_SUCCESS',
}

export interface Book {
  id: string;
  created_at: number;
  title: string;
  description: string;
  author: string;
  category?: Category;
  deleted: boolean;
  img_url?: string;
}

export interface BooksState {
  readonly data: Book[];
  readonly loading: boolean;
  readonly error: boolean;
}
