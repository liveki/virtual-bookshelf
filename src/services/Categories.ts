import { Category } from '../store/ducks/categories/types';

export const load = () => {
  const findCategories = localStorage.getItem('@VirtualBookshelf:categories');
  const newCategories: Category[] = [];

  if (!findCategories) {
    newCategories.push({ id: 'none', name: 'Sem categoria' });
    newCategories.push({ id: 'wantToRead', name: 'Vou ler' });
    newCategories.push({ id: 'reading', name: 'Estou lendo' });
    newCategories.push({ id: 'read', name: 'Já li' });

    localStorage.setItem(
      '@VirtualBookshelf:categories',
      JSON.stringify(newCategories)
    );
    return newCategories;
  }

  return JSON.parse(findCategories) as Category[];
};
