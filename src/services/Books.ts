import { v4 } from 'uuid';
import { Book } from '../store/ducks/books/types';
import store from '../store';

export interface BookDTO {
  title: string;
  author: string;
  description: string;
  img_url?: string;
}

export const create = ({ author, description, title, img_url }: BookDTO) => {
  const JSONBooks = localStorage.getItem('@VirtualBookshelf:books');
  const { categories } = store.getState();

  const newBook: Book = Object.assign({
    id: v4(),
    title,
    author,
    description,
    img_url:
      img_url ||
      'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg',
    deleted: false,
    created_at: Date.now(),
    category: categories.data[0],
  });

  if (!JSONBooks) {
    localStorage.setItem('@VirtualBookshelf:books', JSON.stringify([newBook]));
    return newBook;
  }

  const updatedBooks = JSON.parse(JSONBooks) as Book[];

  updatedBooks.push(newBook);

  localStorage.setItem(
    '@VirtualBookshelf:books',
    JSON.stringify([...updatedBooks])
  );

  return newBook;
};

export const load = () => {
  const JSONBooks = localStorage.getItem('@VirtualBookshelf:books');

  if (!JSONBooks) {
    return [];
  }

  return JSON.parse(JSONBooks) as Book[];
};

export const save = (book: Book) => {
  const { books } = store.getState();

  const findIndex = books.data.findIndex((findBook) => findBook.id === book.id);

  if (findIndex > -1) {
    books.data[findIndex] = book;
    localStorage.setItem(
      '@VirtualBookshelf:books',
      JSON.stringify([...books.data])
    );

    return books.data;
  }
};

export const remove = (id: string) => {
  const { books } = store.getState();
  console.log('entrei aqui');

  const findIndex = books.data.findIndex((book) => book.id === id);

  if (findIndex > -1) {
    books.data[findIndex].deleted = true;
    localStorage.setItem(
      '@VirtualBookshelf:books',
      JSON.stringify([...books.data])
    );
  }
  return books.data;
};

export const sortByTitleASC = () => {
  const { data: books } = store.getState().books;

  const booksWithoutCategory = books.filter(
    (book) => (book.category.name = 'none')
  );
  const wantToReadBooks = books.filter(
    (book) => (book.category.name = 'wantToRead')
  );
  const readingBooks = books.filter((book) => (book.category.name = 'reading'));
  const readBooks = books.filter((book) => (book.category.name = 'read'));

  booksWithoutCategory.sort((bookA, bookB) => {
    if (bookA.title.toUpperCase() > bookB.title.toUpperCase()) return 1;
    else if (bookA.title.toUpperCase() < bookB.title.toUpperCase()) return -1;
    else return 0;
  });

  wantToReadBooks.sort((bookA, bookB) => {
    if (bookA.title.toUpperCase() > bookB.title.toUpperCase()) return 1;
    else if (bookA.title.toUpperCase() < bookB.title.toUpperCase()) return -1;
    else return 0;
  });

  readingBooks.sort((bookA, bookB) => {
    if (bookA.title.toUpperCase() > bookB.title.toUpperCase()) return 1;
    else if (bookA.title.toUpperCase() < bookB.title.toUpperCase()) return -1;
    else return 0;
  });

  readBooks.sort((bookA, bookB) => {
    if (bookA.title.toUpperCase() > bookB.title.toUpperCase()) return 1;
    else if (bookA.title.toUpperCase() < bookB.title.toUpperCase()) return -1;
    else return 0;
  });

  booksWithoutCategory.concat(wantToReadBooks, readingBooks, readBooks);

  return booksWithoutCategory;
};

export const sortByTitleDESC = () => {
  const { data: books } = store.getState().books;

  const booksWithoutCategory = books.filter(
    (book) => (book.category.name = 'none')
  );
  const wantToReadBooks = books.filter(
    (book) => (book.category.name = 'wantToRead')
  );
  const readingBooks = books.filter((book) => (book.category.name = 'reading'));
  const readBooks = books.filter((book) => (book.category.name = 'read'));

  booksWithoutCategory.sort((bookA, bookB) => {
    if (bookA.title.toUpperCase() < bookB.title.toUpperCase()) return 1;
    else if (bookA.title.toUpperCase() > bookB.title.toUpperCase()) return -1;
    else return 0;
  });

  wantToReadBooks.sort((bookA, bookB) => {
    if (bookA.title.toUpperCase() < bookB.title.toUpperCase()) return 1;
    else if (bookA.title.toUpperCase() > bookB.title.toUpperCase()) return -1;
    else return 0;
  });

  readingBooks.sort((bookA, bookB) => {
    if (bookA.title.toUpperCase() < bookB.title.toUpperCase()) return 1;
    else if (bookA.title.toUpperCase() > bookB.title.toUpperCase()) return -1;
    else return 0;
  });

  readBooks.sort((bookA, bookB) => {
    if (bookA.title.toUpperCase() < bookB.title.toUpperCase()) return 1;
    else if (bookA.title.toUpperCase() > bookB.title.toUpperCase()) return -1;
    else return 0;
  });

  booksWithoutCategory.concat(wantToReadBooks, readingBooks, readBooks);

  return booksWithoutCategory;
};

export const sortByDateASC = () => {
  const { data: books } = store.getState().books;

  books.sort((bookA, bookB) => {
    if (bookA.created_at > bookB.created_at) return 1;
    else if (bookA.created_at < bookB.created_at) return -1;
    else return 0;
  });

  return books;
};

export const sortByDateDESC = () => {
  const { data: books } = store.getState().books;

  books.sort((bookA, bookB) => {
    if (bookA.created_at < bookB.created_at) return 1;
    else if (bookA.created_at > bookB.created_at) return -1;
    else return 0;
  });

  return books;
};
