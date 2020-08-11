import React, { useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { format, toDate } from 'date-fns';

import { Book } from '../../store/ducks/books/types';
import { Category } from '../../store/ducks/categories/types';

import PageHeader from '../../components/PageHeader';

import { Box, Card, CardContent } from '@material-ui/core';

import { CategoryTitle, useStyle } from './styles';

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
