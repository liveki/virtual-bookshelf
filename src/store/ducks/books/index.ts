import { BooksState, BooksTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: BooksState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<BooksState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BooksTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case BooksTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case BooksTypes.CREATE_REQUEST:
      return state;
    case BooksTypes.CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, action.payload],
      };
    case BooksTypes.UPDATE_REQUEST:
      return { ...state, loading: true };
    case BooksTypes.UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case BooksTypes.REMOVE_REQUEST:
      return { ...state, loading: true };
    case BooksTypes.REMOVE_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    case BooksTypes.SORT_BY_DATE_REQUEST:
      return { ...state, loading: true };
    case BooksTypes.SORT_BY_DATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case BooksTypes.SORT_BY_TITLE_REQUEST:
      return { ...state, loading: true };
    case BooksTypes.SORT_BY_TITLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
