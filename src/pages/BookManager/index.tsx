import React from 'react';
import {
  Box,
  makeStyles,
  createStyles,
  InputLabel,
  Input,
  TextareaAutosize,
} from '@material-ui/core';
import PageHeader from '../../components/PageHeader';
import { Button } from './styles';
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

  const handleSave = () => {};

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
          <Input id="title" className={styles.input} />

          <InputLabel htmlFor="description" className={styles.inputLabel}>
            Descrição *
          </InputLabel>

          <textarea className={styles.textArea} id="description" />

          <InputLabel htmlFor="author" className={styles.inputLabel}>
            Autor *
          </InputLabel>
          <Input id="author" className={styles.input} />

          <InputLabel htmlFor="imageUrl" className={styles.inputLabel}>
            URL da imagem (opicional)
          </InputLabel>
          <Input
            id="imageUrl"
            className={styles.input}
            style={{
              marginBottom: '2rem',
            }}
          />

          <Button type="button">Salvar</Button>
        </form>
      </Box>
    </Box>
  );
};

export default BookManager;
