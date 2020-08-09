import React, { useEffect, useState } from 'react';
import { FormattedBook } from '../Home';
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
import { useRouteMatch, useLocation } from 'react-router-dom';
import { Book } from '../../store/ducks/books/types';
import { ApplicationState } from '../../store';
import { useSelector } from 'react-redux';

interface LocationProps {
  formattedBook: FormattedBook;
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
      padding: '3rem 0',
    },
    img: {
      width: '17.6rem',
      height: '30.3rem',
    },
    bookDetail: {
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
  })
);

const BookDetail: React.FC = () => {
  const styles = useStyle();

  const { formattedBook } = useLocation<LocationProps>().state;

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

            <strong>Categoria</strong>
            <span>{formattedBook.category?.name}</span>

            <ButtonsContainer>
              <Button>
                Editar
                <FiEdit2 size={25} />
              </Button>

              <Button isDeleteType>
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
          />
          <textarea
            className={styles.textArea}
            placeholder="Digite um comentário..."
          ></textarea>
          <button>Comentar</button>
        </Box>

        <span className={styles.commentCounter}>2 Comentários</span>

        <Box component="div" className={styles.commentList}>
          <Card className={styles.comment}>
            <CardContent>
              <Box component="div" className={styles.authorInfo}>
                <strong>
                  <i>Marlon Saldanha</i>
                </strong>
                <span>
                  <i>06/08/2020</i>
                </span>
              </Box>
              <p>
                <i>
                  "– Está também em nosso mundo? – perguntou Edmundo. – Estou.
                  Mas tenho outro nome. Têm de aprender a conhecer-me por esse
                  nome. Foi por isso que os levei a Nárnia, para que,
                  conhecendo-me um pouco, venham a conhecer-me melhor." História
                  maravilhosa. As referências bíblicas me encantaram. Super
                  recomendo!
                </i>
              </p>
              <ButtonsContainer>
                <FiEdit2
                  size={24}
                  style={{
                    color: '#959393',
                  }}
                />
                <FiTrash2
                  size={24}
                  style={{
                    color: '#FF0000',
                    marginLeft: '1.3rem',
                  }}
                />
              </ButtonsContainer>
            </CardContent>
          </Card>

          <Card className={styles.comment}>
            <CardContent>
              <Box component="div" className={styles.authorInfo}>
                <strong>
                  <i>Larissa Mendes</i>
                </strong>
                <span>
                  <i>30/05/2019</i>
                </span>
              </Box>
              <p>
                <i>
                  Finalmente relançaram uma edição caprichada pra esse clássico
                  da fantasia! Detalhe que ela é baseada na edição oficial
                  completa em inglês, com a capa original e ilustrações
                  coloridas. Uma dica: para compreender melhor a história, leia
                  as crônicas em ordem de publicação - O Leão, a Feiticeira e o
                  Guarda-Roupa (1950), Príncipe Caspian (1951), A Viagem do
                  Peregrino da Alvorada (1952), A Cadeira de Prata (1953), O
                  Cavalo e seu Menino (1954), O Sobrinho do Mago (1955), A
                  Última Batalha (1956).
                </i>
              </p>
              <ButtonsContainer>
                <FiEdit2
                  size={24}
                  style={{
                    color: '#959393',
                  }}
                />
                <FiTrash2
                  size={24}
                  style={{
                    color: '#FF0000',
                    marginLeft: '1.3rem',
                  }}
                />
              </ButtonsContainer>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default BookDetail;
