import { Category } from '../store/ducks/categories/types';

const LoadCategories = () => {
  const checkCategories = localStorage.getItem('@VirtualBookshelf/categories');
  let categories: Category[] = [];
  if (!checkCategories) {
    categories.push({ id: '1', name: 'wantToRead' });
    categories.push({ id: '2', name: 'reading' });
    categories.push({ id: '3', name: 'read' });

    localStorage.setItem(
      '@VirtualBookshelf/categories',
      JSON.stringify(categories)
    );

    return categories;
  }

  return JSON.parse(checkCategories) as Category[];
};

export default LoadCategories;
