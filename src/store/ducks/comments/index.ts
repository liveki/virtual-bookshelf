import { CommentsState, CommentsTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: CommentsState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<CommentsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CommentsTypes.LOAD_COMMENTS_REQUEST:
      return { ...state, loading: true };
    case CommentsTypes.LOAD_COMMENTS_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    case CommentsTypes.CREATE_COMMENT_REQUEST:
      return { ...state, loading: true };
    case CommentsTypes.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, action.payload],
      };
    case CommentsTypes.SAVE_COMMENT_REQUEST:
      return { ...state, loading: true };
    case CommentsTypes.SAVE_COMMENT_SUCCESSS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, action.payload],
      };
    case CommentsTypes.REMOVE_COMMENT_REQUEST:
      return { ...state, loading: true };
    case CommentsTypes.REMOVE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
