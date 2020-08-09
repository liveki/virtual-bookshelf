import { Category } from '../store/ducks/categories/types';

export const load = () => {
  const findCategories = localStorage.getItem('@VirtualBookshelf:categories');
  const newCategories: Category[] = [];

  if (!findCategories) {
    newCategories.push({ id: '1', name: 'none' });
    newCategories.push({ id: '2', name: 'wantToRead' });
    newCategories.push({ id: '3', name: 'reading' });
    newCategories.push({ id: '4', name: 'read' });

    localStorage.setItem(
      '@VirtualBookshelf:categories',
      JSON.stringify(newCategories)
    );
    return newCategories;
  }

  return JSON.parse(findCategories) as Category[];
};
