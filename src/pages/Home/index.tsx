import React, { useEffect, useMemo, useState } from 'react';
import { ApplicationState } from '../../store';
import { toDate, format } from 'date-fns';
import * as categoryActions from '../../store/ducks/categories/actions';
import * as bookActions from '../../store/ducks/books/actions';
import * as commentActions from '../../store/ducks/comments/actions';

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
import { BookFilter, Button, SearchFieldTitle } from './styles';
import { FaPlus, FaArrowRight } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Category } from '../../store/ducks/categories/types';
import RadioFilterBook from '../../components/RadioFilterBook';

export interface Book {
  id: string;
  created_at: number;
  title: string;
  description: string;
  author: string;
  category: Category;
  deleted: boolean;
  img_url?: string;
  formattedDate: string;
}

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
      marginBottom: '3rem',
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
    booksWithoutCategory: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '15.1rem',
      marginBottom: '9.6rem',
      flexWrap: 'wrap',
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
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      '@media (max-width:700px)': {
        flexDirection: 'column',
      },
    },
    buttonsContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4rem 0',
      '@media (max-width:700px)': {
        flexDirection: 'column',
        '& button': {
          margin: '5rem 0',
        },
      },
    },
  })
);

const Home: React.FC = () => {
  const styles = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();

  const { books, categories } = useSelector((state: ApplicationState) => state);

  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    dispatch(categoryActions.loadRequest());
    dispatch(bookActions.loadRequest());
    dispatch(commentActions.loadCommentsRequest());
  }, [dispatch]);

  const handleBookRegister = () => {
    history.push('/book-manager');
  };

  const handleBookDetail = (book: Book) => {
    history.push('/book-detail', { formattedBook: book });
  };

  const formattedBooks: Book[] = useMemo(() => {
    const parsedBooks = books.data.map((book) => {
      const parsedDate = toDate(book.created_at);

      return {
        ...book,
        formattedDate: format(parsedDate, 'dd/MM/y'),
      };
    });

    return parsedBooks;
  }, [books]);

  const filteredBooks = useMemo(() => {
    return formattedBooks.filter((bookItem) => !bookItem.deleted);
  }, [formattedBooks]);

  const researchResultBooks = useMemo(() => {
    return filteredBooks.filter((book) =>
      book.title.toUpperCase().includes(searchField.toUpperCase())
    );
  }, [filteredBooks, searchField]);

  const booksWithoutCategory = useMemo(() => {
    return filteredBooks.filter((bookItem) => bookItem.category.id === 'none');
  }, [filteredBooks]);

  const wantToReadBooks = useMemo(() => {
    return filteredBooks.filter(
      (bookItem) => bookItem.category.id === 'wantToRead'
    );
  }, [filteredBooks]);

  const readingBooks = useMemo(() => {
    return filteredBooks.filter(
      (bookItem) => bookItem.category.id === 'reading'
    );
  }, [filteredBooks]);

  const readBooks = useMemo(() => {
    return filteredBooks.filter((bookItem) => bookItem.category.id === 'read');
  }, [filteredBooks]);

  return (
    <Box component="div" className={styles.container}>
      <PageHeader />
      <Box component="div" id="container">
        <BookFilter>
          <Input
            type="text"
            placeholder="Pesquisar..."
            className={styles.input}
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          />
        </BookFilter>

        {searchField ? (
          <>
            <SearchFieldTitle>Resultado da busca:</SearchFieldTitle>

            <Box component="div" className={styles.booksWantToReadContainer}>
              <Box component="div" className={styles.booksWantToReadContent}>
                {researchResultBooks.map((book) => (
                  <Card
                    className={styles.card}
                    key={book.id}
                    onClick={() => handleBookDetail(book)}
                  >
                    <CardContent className={styles.cardContent}>
                      <img
                        src={book.img_url}
                        alt="capa"
                        className={styles.cardImg}
                      />
                      <Box component="div" className={styles.cardTextContainer}>
                        <strong className={styles.cardText}>
                          {book.title}
                        </strong>
                        <span className={styles.cardCreatedAtText}>
                          {book.formattedDate}
                        </span>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          </>
        ) : (
          <>
            <div className={styles.buttonsContainer}>
              <RadioFilterBook />
              <Button onClick={handleBookRegister}>
                Cadastrar livro
                <FaPlus size={20} />
              </Button>
            </div>
            {booksWithoutCategory.length > 0 && (
              <Box component="div" className={styles.booksWantToReadContainer}>
                <Link
                  to={{
                    pathname: '/category-list',
                    state: { category: categories.data[0] },
                  }}
                  className={styles.link}
                >
                  Sem categoria <FaArrowRight size={20} />
                </Link>
                <Box component="div" className={styles.booksWantToReadContent}>
                  {booksWithoutCategory.map((book) => (
                    <Card
                      className={styles.card}
                      key={book.id}
                      onClick={() => handleBookDetail(book)}
                    >
                      <CardContent className={styles.cardContent}>
                        <img
                          src={book.img_url}
                          alt="capa"
                          className={styles.cardImg}
                        />
                        <Box
                          component="div"
                          className={styles.cardTextContainer}
                        >
                          <strong className={styles.cardText}>
                            {book.title}
                          </strong>
                          <span className={styles.cardCreatedAtText}>
                            {book.formattedDate}
                          </span>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Box>
            )}

            {readingBooks.length > 0 && (
              <Box component="div" className={styles.booksWantToReadContainer}>
                <Link
                  to={{
                    pathname: '/category-list',
                    state: { category: categories.data[2] },
                  }}
                  className={styles.link}
                >
                  Estou lendo <FaArrowRight size={20} />
                </Link>
                <Box component="div" className={styles.booksWantToReadContent}>
                  {readingBooks.map((book) => (
                    <Card
                      className={styles.card}
                      key={book.id}
                      onClick={() => handleBookDetail(book)}
                    >
                      <CardContent className={styles.cardContent}>
                        <img
                          src={book.img_url}
                          alt="capa"
                          className={styles.cardImg}
                        />
                        <Box
                          component="div"
                          className={styles.cardTextContainer}
                        >
                          <strong className={styles.cardText}>
                            {book.title}
                          </strong>
                          <span className={styles.cardCreatedAtText}>
                            {book.formattedDate}
                          </span>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Box>
            )}

            {wantToReadBooks.length > 0 && (
              <Box component="div" className={styles.booksWantToReadContainer}>
                <Link
                  to={{
                    pathname: '/category-list',
                    state: { category: categories.data[1] },
                  }}
                  className={styles.link}
                >
                  Vou ler <FaArrowRight size={20} />
                </Link>
                <Box component="div" className={styles.booksWantToReadContent}>
                  {wantToReadBooks.map((book) => (
                    <Card
                      className={styles.card}
                      key={book.id}
                      onClick={() => handleBookDetail(book)}
                    >
                      <CardContent className={styles.cardContent}>
                        <img
                          src={book.img_url}
                          alt="capa"
                          className={styles.cardImg}
                        />
                        <Box
                          component="div"
                          className={styles.cardTextContainer}
                        >
                          <strong className={styles.cardText}>
                            {book.title}
                          </strong>
                          <span className={styles.cardCreatedAtText}>
                            {book.formattedDate}
                          </span>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Box>
            )}

            {readBooks.length > 0 && (
              <Box component="div" className={styles.booksWantToReadContainer}>
                <Link
                  to={{
                    pathname: '/category-list',
                    state: { category: categories.data[3] },
                  }}
                  className={styles.link}
                >
                  Já li <FaArrowRight size={20} />
                </Link>
                <Box component="div" className={styles.booksWantToReadContent}>
                  {readBooks.map((book) => (
                    <Card
                      className={styles.card}
                      key={book.id}
                      onClick={() => handleBookDetail(book)}
                    >
                      <CardContent className={styles.cardContent}>
                        <img
                          src={book.img_url}
                          alt="capa"
                          className={styles.cardImg}
                        />
                        <Box
                          component="div"
                          className={styles.cardTextContainer}
                        >
                          <strong className={styles.cardText}>
                            {book.title}
                          </strong>
                          <span className={styles.cardCreatedAtText}>
                            {book.formattedDate}
                          </span>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Home;
