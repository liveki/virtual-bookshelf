import React, { useCallback, useState, useMemo } from 'react';
import { Book as BookProps } from '../Home';
import {
  makeStyles,
  createStyles,
  Box,
  Input,
  Card,
  CardContent,
} from '@material-ui/core';
import PageHeader from '../../components/PageHeader';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { ButtonsContainer, Button } from './styles';
import { useLocation, useHistory } from 'react-router-dom';
import { ApplicationState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import * as bookActions from '../../store/ducks/books/actions';
import * as commentActions from '../../store/ducks/comments/actions';
import { CommentDTO } from '../../services/Comments';
import { toDate } from 'date-fns/esm';
import { format } from 'date-fns';
import CommentModal from '../../components/CommentModal';
import DeleteCommentModal from '../../components/DeleteCommentModal';

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

const useStyle = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    bookContainer: {
      display: 'flex',
      marginTop: '3rem',
      '@media (max-width:700px)': {
        alignItems: 'center',
      },
    },
    img: {
      width: '17.6rem',
      height: '30.3rem',
      '@media (max-width:700px)': {
        display: 'none',
      },
    },
    bookDetail: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '4rem',
      '& strong': {
        color: '#7D4715',
        font: '500 1.8rem Roboto',
      },
      '& span': {
        color: '#7D4715',
        font: '300 1.8rem Roboto',
        marginBottom: '1rem',
      },
      '& p': {
        color: '#7D4715',
        font: '300 1.8rem Roboto',
        textAlign: 'justify',
        marginBottom: '1rem',
      },
      '@media (max-width:700px)': {
        width: '100%',
        marginLeft: '0',
      },
    },
    commentContainer: {
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      marginBottom: '2rem',
      '& button': {
        width: '11.2rem',
        height: '4.2rem',
        border: '0',
        background: '#7d4715',
        borderRadius: '0.4rem',
        outline: '0',
        color: '#fff',
        font: '400 2rem Roboto',
        marginTop: '1.3rem',
        cursor: 'pointer',
      },
    },
    input: {
      width: '100%',
      height: '5rem',
      background: '#E5E5E5',
      font: '500 2rem Roboto',
      paddingLeft: '1.7rem',
      borderRadius: '0.4rem',
      marginTop: '3.5rem',
      marginBottom: '2.3rem',
      border: '0',
    },
    textArea: {
      width: '100%',
      resize: 'vertical',
      minHeight: '13.2rem',
      maxHeight: '13.2rem',
      background: '#E5E5E5',
      border: '0',
      borderRadius: '0.4rem',
      font: '500 2rem Roboto',
      paddingLeft: '1.7rem',
      outline: 0,
      paddingTop: '1.3rem',
    },
    commentCounter: {
      font: '400 2rem Roboto',
      color: '#676767',
      marginTop: '1rem',
    },
    commentList: {
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
      marginBottom: '3.6rem',
    },
    authorInfo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1.3rem',
    },
    comment: {
      marginTop: '1.4rem',
      background: '#F7F7F7',
      '& p': {
        font: '300 1.6rem Roboto',
        marginBottom: '2.9rem',
      },
      '& strong': {
        font: '400 1.8rem Roboto',
        marginRight: '4.8rem',
      },
      '& span': {
        font: '300 1.8rem Roboto',
      },
    },
    select: {
      marginBottom: '3rem',
      border: '0',
      borderRadius: '0.4rem',
      background: '#DAA281',
      outline: '0',
      font: '400 1.8rem Roboto',
      width: '15rem',
      color: '#fff',
    },
  })
);

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

  const handleRemove = useCallback(
    (id: string) => {
      dispatch(bookActions.removeRequest(id));
      history.push('/');
    },
    [dispatch, history]
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

              <Button
                isDeleteType
                onClick={() => handleRemove(formattedBook.id)}
              >
                Remover
                <FiTrash2 size={25} />
              </Button>
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
