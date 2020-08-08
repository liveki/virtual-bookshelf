import React, { useEffect } from 'react';
import { ApplicationState } from '../../store';
import { loadRequest } from '../../store/ducks/categories/actions';
import PageHeader from '../../components/PageHeader';
import {
  Box,
  Input,
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardContent,
} from '@material-ui/core';
import { BookFilter, Button } from './styles';
import { FaPlus, FaArrowRight } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CategoriesState } from '../../store/ducks/categories/types';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input: {
      width: '27.9rem',
      background: '#CA9B6F',
      borderRadius: '0.4rem',
      color: '#fff',
      fontFamily: 'Roboto',
      fontWeight: 'normal',
      fontSize: '2rem',
      paddingLeft: '1.1rem',
      marginTop: '-2.5rem',
      margin: '0 auto',
    },
    card: {
      background: '#FEE8CD',
      display: 'flex',
      alignItems: 'center',
      width: '25.4rem',
      height: '16.9rem',
      transition: 'transform 0.2s',
      cursor: 'pointer',
      '&:hover': {
        transform: 'translateY(-5px) translateX(5px)',
      },
    },
    cardContent: {
      display: 'flex',
      alignItems: 'center',
    },
    cardImg: {
      width: '8.2rem',
      height: '15.1rem',
    },
    cardTextContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    cardText: {
      font: '500 1.8rem Roboto',
      color: '#7D4715',
      marginLeft: '1.5rem',
    },
    cardCreatedAtText: {
      font: '500 1.8rem Roboto',
      color: '#7D4715',
      marginTop: '2.9rem',
      marginLeft: '1.5rem',
    },
    booksWithoutCategory: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '15.1rem',
      marginBottom: '9.6rem',
    },
    link: {
      display: 'flex',
      width: 'fit-content',
      alignItems: 'center',
      textDecoration: 'none',
      color: '#7D4715',
      font: '400 2rem Roboto',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      '& svg': {
        marginLeft: '1rem',
      },
    },
    booksWantToReadContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '4.6rem',
    },
    booksWantToReadContent: {
      paddingTop: '2.6rem',
      borderTop: '2px solid rgba(125, 71, 21, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  })
);

const Home: React.FC = () => {
  const styles = useStyle();
  const history = useHistory();

  loadRequest();

  const handleBookRegister = () => {
    history.push('/book-manager');
  };

  const handleBookDetail = () => {
    history.push('/book-detail');
  };

  return (
    <Box component="div" className={styles.container}>
      <PageHeader />
      <Box component="div" id="container">
        <BookFilter>
          <Input
            type="text"
            placeholder="Pesquisar..."
            className={styles.input}
          />
        </BookFilter>

        <Button onClick={handleBookRegister}>
          Cadastrar livro
          <FaPlus size={20} />
        </Button>

        <Box component="div" className={styles.booksWithoutCategory}>
          <Card className={styles.card} onClick={handleBookDetail}>
            <CardContent className={styles.cardContent}>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51IA2UEqA-L._SX332_BO1,204,203,200_.jpg"
                alt="capa"
                className={styles.cardImg}
              />
              <Box component="div" className={styles.cardTextContainer}>
                <strong className={styles.cardText}>
                  Harry Potter e o Prisioneiro de Azkaban
                </strong>
                <span className={styles.cardCreatedAtText}>06/08/2020</span>
              </Box>
            </CardContent>
          </Card>

          <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51IA2UEqA-L._SX332_BO1,204,203,200_.jpg"
                alt="capa"
                className={styles.cardImg}
              />
              <Box component="div" className={styles.cardTextContainer}>
                <strong className={styles.cardText}>
                  Harry Potter e o Prisioneiro de Azkaban
                </strong>
                <span className={styles.cardCreatedAtText}>06/08/2020</span>
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Box component="div" className={styles.booksWantToReadContainer}>
          <Link to="/category-list/reading" className={styles.link}>
            Estou lendo <FaArrowRight size={20} />
          </Link>
          <Box component="div" className={styles.booksWantToReadContent}>
            <Card className={styles.card}>
              <CardContent className={styles.cardContent}>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/91wJzyhRfkL.jpg"
                  alt="capa"
                  className={styles.cardImg}
                />
                <Box component="div" className={styles.cardTextContainer}>
                  <strong className={styles.cardText}>
                    As crônicas de Nárnia
                  </strong>
                  <span className={styles.cardCreatedAtText}>06/08/2020</span>
                </Box>
              </CardContent>
            </Card>

            <Card className={styles.card}>
              <CardContent className={styles.cardContent}>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/91wJzyhRfkL.jpg"
                  alt="capa"
                  className={styles.cardImg}
                />
                <Box component="div" className={styles.cardTextContainer}>
                  <strong className={styles.cardText}>
                    As crônicas de Nárnia
                  </strong>
                  <span className={styles.cardCreatedAtText}>06/08/2020</span>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Box component="div" className={styles.booksWantToReadContainer}>
          <Link to="/category-list/want-to-read" className={styles.link}>
            Vou ler <FaArrowRight size={20} />
          </Link>
          <Box component="div" className={styles.booksWantToReadContent}>
            <Card className={styles.card}>
              <CardContent className={styles.cardContent}>
                <img
                  src="https://lojasaraiva.vteximg.com.br/arquivos/ids/12109083/1006637057.jpg?v=637142248087230000"
                  alt="capa"
                  className={styles.cardImg}
                />
                <Box component="div" className={styles.cardTextContainer}>
                  <strong className={styles.cardText}>A cabana</strong>
                  <span className={styles.cardCreatedAtText}>06/08/2020</span>
                </Box>
              </CardContent>
            </Card>

            <Card className={styles.card}>
              <CardContent className={styles.cardContent}>
                <img
                  src="https://i2.wp.com/cenfewc.com.br/wp-content/uploads/2018/03/imagem-nao-disponivel.jpg?fit=600%2C600&ssl=1"
                  alt="capa"
                  className={styles.cardImg}
                />
                <Box component="div" className={styles.cardTextContainer}>
                  <strong className={styles.cardText}>Náufrago</strong>
                  <span className={styles.cardCreatedAtText}>06/08/2020</span>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Box component="div" className={styles.booksWantToReadContainer}>
          <Link to="/category-list/read" className={styles.link}>
            Já li <FaArrowRight size={20} />
          </Link>
          <Box component="div" className={styles.booksWantToReadContent}>
            <Card className={styles.card}>
              <CardContent className={styles.cardContent}>
                <img
                  src="https://lojasaraiva.vteximg.com.br/arquivos/ids/12109083/1006637057.jpg?v=637142248087230000"
                  alt="capa"
                  className={styles.cardImg}
                />
                <Box component="div" className={styles.cardTextContainer}>
                  <strong className={styles.cardText}>A cabana</strong>
                  <span className={styles.cardCreatedAtText}>06/08/2020</span>
                </Box>
              </CardContent>
            </Card>

            <Card className={styles.card}>
              <CardContent className={styles.cardContent}>
                <img
                  src="https://i2.wp.com/cenfewc.com.br/wp-content/uploads/2018/03/imagem-nao-disponivel.jpg?fit=600%2C600&ssl=1"
                  alt="capa"
                  className={styles.cardImg}
                />
                <Box component="div" className={styles.cardTextContainer}>
                  <strong className={styles.cardText}>Náufrago</strong>
                  <span className={styles.cardCreatedAtText}>06/08/2020</span>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
