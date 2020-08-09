import React, { useState, FormEvent, useCallback } from 'react';
import * as bookActions from '../../store/ducks/books/actions';

import {
  Box,
  makeStyles,
  createStyles,
  InputLabel,
  Input,
} from '@material-ui/core';
import PageHeader from '../../components/PageHeader';
import { Button } from './styles';
import { useDispatch } from 'react-redux';
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

const BookManager: React.FC = () => {
  const styles = useStyle();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const dispatch = useDispatch();

  const handleSave = useCallback(() => {
    return dispatch(
      bookActions.createRequest({
        title,
        description,
        author,
        img_url: imgUrl,
      })
    );
  }, [dispatch, title, description, author, imgUrl]);

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
