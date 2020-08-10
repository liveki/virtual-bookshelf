import React from 'react';
import {
  Box,
  makeStyles,
  createStyles,
  Input,
  Card,
  CardContent,
} from '@material-ui/core';
import { BookFilter } from './styles';
import PageHeader from '../../components/PageHeader';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles(() =>
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
    booksWithoutCategory: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '15.1rem',
      marginBottom: '9.6rem',
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
  })
);

const CategoryList: React.FC = () => {
  const styles = useStyle();
  const history = useHistory();

  const handleBookDetail = () => {
    history.push('/book-detail');
  };

  return (
    <Box component="div" className={styles.container}>
      <PageHeader
        backControl
        style={{
          height: '50rem',
        }}
      ></PageHeader>
      <Box component="div" id="container">
        <BookFilter>
          <Input
            type="text"
            placeholder="Pesquisar..."
            className={styles.input}
          />
        </BookFilter>

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
      </Box>
    </Box>
  );
};

export default CategoryList;
