import React, { useState, useCallback, useEffect, FormEvent } from 'react';
import {
  Box,
  makeStyles,
  createStyles,
  InputLabel,
  Input,
} from '@material-ui/core';
import PageHeader from '../../components/PageHeader';
import * as bookActions from '../../store/ducks/books/actions';
import { Button } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { ApplicationState } from '../../store';
import { Category } from '../../store/ducks/categories/types';

const useStyle = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    inputLabel: {
      font: '500 2rem Roboto',
      color: '#B5B5B5',
      marginTop: '2rem',
    },
    input: {
      width: '100%',
      height: '5rem',
      background: '#EFEFEF',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '0.4rem',
      font: '500 2rem Roboto',
      paddingLeft: '0.5rem',
    },
    textArea: {
      width: '100%',
      resize: 'vertical',
      minHeight: '13.2rem',
      maxHeight: '13.2rem',
      background: '#EFEFEF',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '0.4rem',
      font: '500 2rem Roboto',
      paddingLeft: '0.5rem',
      outline: 0,
      paddingTop: '0.3rem',
    },
  })
);

interface RouteParams {
  id: string;
}

const BookManager: React.FC = () => {
  const styles = useStyle();
  const [id, setId] = useState('');
  const [createdAt, setCreatedAt] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState<Category>({} as Category);
  const [deleted, setDeleted] = useState(false);
  const [imgUrl, setImgUrl] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  const { params } = useRouteMatch<RouteParams>();
  const { data: books } = useSelector((state: ApplicationState) => state.books);

  useEffect(() => {
    if (params.id) {
      const findBook = books.find((book) => book.id === params.id);
      if (findBook) {
        setId(findBook.id);
        setCreatedAt(findBook.created_at);
        setTitle(findBook.title);
        setDescription(findBook.description);
        setAuthor(findBook.author);
        setCategory(findBook.category);
        setDeleted(findBook.deleted);
        setImgUrl(findBook.img_url ? findBook.img_url : '');
      }
    }
  }, [books, params.id]);

  const handleSave = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (params.id) {
        dispatch(
          bookActions.saveRequest({
            author,
            category,
            created_at: createdAt,
            deleted,
            description,
            id,
            title,
            img_url: imgUrl,
          })
        );
      } else {
        dispatch(
          bookActions.createRequest({
            author,
            description,
            title,
            img_url: imgUrl,
          })
        );
      }
      history.push('/');
    },
    [
      author,
      category,
      createdAt,
      deleted,
      description,
      dispatch,
      history,
      id,
      imgUrl,
      params.id,
      title,
    ]
  );

  return (
    <Box component="div" className={styles.container}>
      <PageHeader description="Cadastre ou edite um livro." backControl />
      <Box
        component="div"
        id="container"
        style={{
          height: '100vh',
        }}
      >
        <form onSubmit={handleSave}>
          <InputLabel htmlFor="title" className={styles.inputLabel}>
            Título *
          </InputLabel>
          <Input
            id="title"
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <InputLabel htmlFor="description" className={styles.inputLabel}>
            Descrição *
          </InputLabel>

          <textarea
            className={styles.textArea}
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <InputLabel htmlFor="author" className={styles.inputLabel}>
            Autor *
          </InputLabel>
          <Input
            id="author"
            className={styles.input}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <InputLabel htmlFor="imageUrl" className={styles.inputLabel}>
            URL da imagem (opcional)
          </InputLabel>
          <Input
            id="imageUrl"
            className={styles.input}
            style={{
              marginBottom: '2rem',
            }}
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />

          <Button type="submit">Salvar</Button>
        </form>
      </Box>
    </Box>
  );
};

export default BookManager;
