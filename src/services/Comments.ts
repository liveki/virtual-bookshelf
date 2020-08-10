import { Comment } from '../store/ducks/comments/types';
import store from '../store';
import { v4 } from 'uuid';

export interface CommentDTO {
  book_id: string;
  body: string;
  author: string;
}

export const create = ({ author, body, book_id }: CommentDTO) => {
  const JSONComments = localStorage.getItem('@VirtualBookshelf:comments');

  const newComment: Comment = {
    id: v4(),
    author,
    body,
    book_id,
    created_at: Date.now(),
    deleted: false,
  };

  if (JSONComments) {
    const comments = JSON.parse(JSONComments) as Comment[];
    comments.push(newComment);

    localStorage.setItem(
      '@VirtualBookshelf:comments',
      JSON.stringify([...comments])
    );
  } else {
    localStorage.setItem(
      '@VirtualBookshelf:comments',
      JSON.stringify([newComment])
    );
  }

  return newComment;
};

export const save = (comment: Comment) => {
  const { data: comments } = store.getState().comments;
  const JSONComments = localStorage.getItem('@VirtualBookshelf:comments');

  const findCommentIndex = comments.findIndex(
    (findComment) => findComment.id === comment.id
  );

  /**Verifica se o comentário existe no estado do reducer.
   * Se sim, realiza a substituição do comentário */
  if (findCommentIndex > -1) {
    comments[findCommentIndex] = comment;
  }

  /**Verifica se os comentários existem no localStorage.
   * Se sim, deverá atualizar e salvar novamente, respeitando as conversões. */
  if (JSONComments) {
    const storageComments = JSON.parse(JSONComments) as Comment[];
    const findIndex = storageComments.findIndex(
      (findComment) => findComment.id === comment.id
    );

    if (findIndex > -1) {
      storageComments[findIndex] = comment;

      localStorage.setItem(
        '@VirtualBookshelf:comments',
        JSON.stringify([...storageComments])
      );
    }
  }

  //Retorna os comentários para o redux saga, devidamente atualizados.
  return comments;
};

export const remove = (comment: Comment) => {
  const { data: comments } = store.getState().comments;
  const JSONComments = localStorage.getItem('@VirtualBookshelf:comments');
  const findIndex = comments.findIndex(
    (findComment) => findComment.id === comment.book_id
  );

  if (JSONComments) {
    const comments = JSON.parse(JSONComments) as Comment[];
    const findIndex = comments.findIndex(
      (findComment) => findComment.id === comment.id
    );

    if (findIndex > -1) {
      comments.slice(findIndex, 1);
      localStorage.setItem(
        '@VirtualBookshelf:comments',
        JSON.stringify([...comments])
      );
    }
  }

  if (findIndex > -1) {
    comments.slice(findIndex, 1);
  }

  return comments;
};

export const load = () => {
  const JSONComments = localStorage.getItem('@VirtualBookshelf:comments');

  if (JSONComments) {
    const comments = JSON.parse(JSONComments) as Comment[];

    return comments;
  }
};
