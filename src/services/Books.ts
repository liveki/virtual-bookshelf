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
    img_url: img_url || null,
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

  const findIndex = books.data.findIndex((book) => book.id === id);

  if (findIndex > -1) {
    books.data[findIndex].deleted = true;
    localStorage.setItem(
      '@VirtualBookshelf:books',
      JSON.stringify([...books.data])
    );
  }

  console.log(books.data);
  return books.data;
};
