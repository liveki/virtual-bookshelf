export enum CommentsTypes {
  LOAD_COMMENTS_REQUEST = '@comments/LOAD_COMMENTS_REQUEST',
  LOAD_COMMENTS_SUCCESS = '@comments/LOAD_COMMENTS_SUCCESS',
  CREATE_COMMENT_REQUEST = '@comments/CREATE_COMMENT_REQUEST',
  CREATE_COMMENT_SUCCESS = '@comments/CREATE_COMMENT_SUCCESS',
  SAVE_COMMENT_REQUEST = '@comments/SAVE_COMMENT_REQUEST',
  SAVE_COMMENT_SUCCESSS = '@comments/SAVE_COMMENT_SUCCESSS',
  REMOVE_COMMENT_REQUEST = '@comments/REMOVE_COMMENT_REQUEST',
  REMOVE_COMMENT_SUCCESS = '@comments/REMOVE_COMMENT_SUCCESS',
}

export interface Comment {
  id: string;
  book_id: string;
  created_at: number;
  body: string;
  author: string;
  deleted: boolean;
}

export interface CommentsState {
  readonly data: Comment[];
  readonly loading: boolean;
  readonly error: boolean;
}
