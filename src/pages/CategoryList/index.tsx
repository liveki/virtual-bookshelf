import React, { useMemo } from 'react';
import {
  Box,
  makeStyles,
  createStyles,
  Card,
  CardContent,
} from '@material-ui/core';
import { CategoryTitle } from './styles';
import PageHeader from '../../components/PageHeader';
import { useHistory, useLocation } from 'react-router-dom';
import { Category } from '../../store/ducks/categories/types';
import { ApplicationState } from '../../store';
import { useSelector } from 'react-redux';
import { toDate } from 'date-fns/esm';
import { format } from 'date-fns';
import { Book } from '../../store/ducks/books/types';

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
      paddingTop: '5rem',
      marginTop: '0.5rem',
      marginBottom: '9.6rem',
      borderTop: '2px solid rgba(125, 71, 21, 0.2)',
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
      font: '300 1.8rem Roboto',
      color: '#7D4715',
      marginTop: '2.9rem',
      marginLeft: '1.5rem',
    },
  })
);

interface LocationProps {
  category: Category;
}

const CategoryList: React.FC = () => {
  const styles = useStyle();
  const history = useHistory();
  const { category } = useLocation<LocationProps>().state;
  const { books } = useSelector((state: ApplicationState) => state);

  const handleBookDetail = (book: Book) => {
    history.push('/book-detail', { formattedBook: book });
  };

  const filteredBooks = useMemo(() => {
    return books.data.filter(
      (book) => book.category.id === category.id && !book.deleted
    );
  }, [books.data, category.id]);

  const formattedBook = useMemo(() => {
    return filteredBooks.map((book) => {
      const parsedDate = toDate(book.created_at);

      return {
        ...book,
        formattedDate: format(parsedDate, 'dd/MM/y'),
      };
    });
  }, [filteredBooks]);

  return (
    <Box component="div" className={styles.container}>
      <PageHeader
        backControl
        style={{
          height: '50rem',
        }}
      ></PageHeader>
      <Box component="div" id="container">
        <CategoryTitle>{category.name}</CategoryTitle>

        <Box component="div" className={styles.booksWithoutCategory}>
          {formattedBook.map((book) => (
            <Card
              className={styles.card}
              onClick={() => handleBookDetail(book)}
              key={book.id}
            >
              <CardContent className={styles.cardContent}>
                <img src={book.img_url} alt="capa" className={styles.cardImg} />
                <Box component="div" className={styles.cardTextContainer}>
                  <strong className={styles.cardText}>{book.title}</strong>
                  <span className={styles.cardCreatedAtText}>
                    {book.formattedDate}
                  </span>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryList;
