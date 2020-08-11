import React, { useCallback, useState, useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { FiEdit2 } from 'react-icons/fi';
import { format, toDate } from 'date-fns';

import * as commentActions from '../../store/ducks/comments/actions';
import * as bookActions from '../../store/ducks/books/actions';
import { CommentDTO } from '../../services/Comments';
import { Book as BookProps } from '../Home';

import PageHeader from '../../components/PageHeader';
import DeleteCommentModal from '../../components/DeleteCommentModal';
import DeleteBookModal from '../../components/DeleteBookModal';
import CommentModal from '../../components/CommentModal';

import { Box, Input, Card, CardContent } from '@material-ui/core';

import { ButtonsContainer, Button, useStyle } from './styles';

export interface LocationProps {
  formattedBook: BookProps;
}

export interface Comment {
  id: string;
  book_id: string;
  created_at: number;
  body: string;
  author: string;
  deleted: boolean;
  formattedDate: string;
}

const BookDetail: React.FC = () => {
  const styles = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  const { formattedBook } = useLocation<LocationProps>().state;
  const { categories, comments } = useSelector(
    (state: ApplicationState) => state
  );

  const [category, setCategory] = useState(formattedBook.category.id);

  const [bodyComment, setBodyComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  const handleBookEdit = useCallback(
    (id: string) => {
      history.push(`/book-manager/${id}`);
    },
    [history]
  );

  const handleCategoryUpdate = useCallback(
    (category_id: string) => {
      const { formattedDate, ...updateBook } = formattedBook;

      const findIndex = categories.data.findIndex(
        (categoryItem) => categoryItem.id === category_id
      );

      if (findIndex > -1) {
        updateBook.category = categories.data[findIndex];
      }

      dispatch(bookActions.saveRequest(updateBook));
      setCategory(category_id);
    },
    [categories.data, formattedBook, dispatch]
  );

  const handlePostComment = useCallback(() => {
    const comment: CommentDTO = {
      author: commentAuthor,
      body: bodyComment,
      book_id: formattedBook.id,
    };

    dispatch(commentActions.createCommentRequest(comment));
  }, [bodyComment, commentAuthor, dispatch, formattedBook.id]);

  const filteredComments = useMemo(() => {
    const filtered = comments.data.filter(
      (comment) => comment.book_id === formattedBook.id && !comment.deleted
    );

    return filtered;
  }, [comments.data, formattedBook.id]);

  const formattedComments: Comment[] = useMemo(() => {
    const data = filteredComments.map((comment) => {
      const parsedDate = toDate(comment.created_at);
      return {
        ...comment,
        formattedDate: format(parsedDate, 'dd/MM/Y'),
      };
    });

    return data;
  }, [filteredComments]);

  return (
    <Box component="div" className={styles.container}>
      <PageHeader backControl />
      <Box component="div" id="container">
        <Box component="div" className={styles.bookContainer}>
          <img src={formattedBook.img_url} alt="capa" className={styles.img} />
          <Box component="div" className={styles.bookDetail}>
            <strong>Título:</strong>
            <span>{formattedBook.title}</span>

            <strong>Descrição:</strong>
            <p>{formattedBook.description}</p>

            <strong>Autor:</strong>
            <span>{formattedBook.author}</span>

            <strong>Criado em:</strong>
            <span>{formattedBook.formattedDate}</span>

            <select
              value={category}
              onChange={(e) => handleCategoryUpdate(e.target.value)}
              className={styles.select}
            >
              {categories.data.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <ButtonsContainer>
              <Button onClick={() => handleBookEdit(formattedBook.id)}>
                Editar
                <FiEdit2 size={25} />
              </Button>

              <DeleteBookModal value={formattedBook} />
            </ButtonsContainer>
          </Box>
        </Box>

        <Box component="div" className={styles.commentContainer}>
          <Input
            id="title"
            className={styles.input}
            placeholder="Digite seu nome..."
            value={commentAuthor}
            onChange={(e) => setCommentAuthor(e.target.value)}
          />
          <textarea
            className={styles.textArea}
            placeholder="Digite um comentário..."
            value={bodyComment}
            onChange={(e) => setBodyComment(e.target.value)}
          ></textarea>
          <button onClick={handlePostComment}>Comentar</button>
        </Box>

        <span
          className={styles.commentCounter}
        >{`${formattedComments.length} Comentários`}</span>

        <Box component="div" className={styles.commentList}>
          {formattedComments.map((comment) => (
            <Card className={styles.comment} key={comment.id}>
              <CardContent>
                <Box component="div" className={styles.authorInfo}>
                  <strong>
                    <i>{comment.author}</i>
                  </strong>
                  <span>
                    <i>{comment.formattedDate}</i>
                  </span>
                </Box>
                <p>
                  <i>{comment.body}</i>
                </p>
                <ButtonsContainer
                  style={{
                    marginBottom: '0',
                  }}
                >
                  <CommentModal value={comment} />
                  <DeleteCommentModal value={comment} />
                </ButtonsContainer>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BookDetail;
