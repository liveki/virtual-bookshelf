import React, { useEffect, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { toDate, format } from 'date-fns';
import { FaPlus, FaArrowRight } from 'react-icons/fa';

import * as categoryActions from '../../store/ducks/categories/actions';
import * as bookActions from '../../store/ducks/books/actions';
import * as commentActions from '../../store/ducks/comments/actions';
import { Category } from '../../store/ducks/categories/types';

import PageHeader from '../../components/PageHeader';
import RadioFilterBook from '../../components/RadioFilterBook';

import { Box, Input, Card, CardContent } from '@material-ui/core';

import { BookFilter, Button, SearchFieldTitle, useStyle } from './styles';

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

            <Box component="div" className={styles.booksContainer}>
              <Box component="div" className={styles.booksContent}>
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
              <Box component="div" className={styles.booksContainer}>
                <Link
                  to={{
                    pathname: '/category-list',
                    state: { category: categories.data[0] },
                  }}
                  className={styles.link}
                >
                  Sem categoria <FaArrowRight size={20} />
                </Link>
                <Box component="div" className={styles.booksContent}>
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
              <Box component="div" className={styles.booksContainer}>
                <Link
                  to={{
                    pathname: '/category-list',
                    state: { category: categories.data[2] },
                  }}
                  className={styles.link}
                >
                  Estou lendo <FaArrowRight size={20} />
                </Link>
                <Box component="div" className={styles.booksContent}>
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
              <Box component="div" className={styles.booksContainer}>
                <Link
                  to={{
                    pathname: '/category-list',
                    state: { category: categories.data[1] },
                  }}
                  className={styles.link}
                >
                  Vou ler <FaArrowRight size={20} />
                </Link>
                <Box component="div" className={styles.booksContent}>
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
              <Box component="div" className={styles.booksContainer}>
                <Link
                  to={{
                    pathname: '/category-list',
                    state: { category: categories.data[3] },
                  }}
                  className={styles.link}
                >
                  Já li <FaArrowRight size={20} />
                </Link>
                <Box component="div" className={styles.booksContent}>
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
