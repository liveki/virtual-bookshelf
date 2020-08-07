import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookManager from './pages/BookManager';
import BookDetail from './pages/BookDetail';
import CategoryList from './pages/CategoryList';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/book-manager/:id?" component={BookManager} />
    <Route path="/book-detail/:id" component={BookDetail} />
    <Route path="/category-list/:category?" component={CategoryList} />
  </BrowserRouter>
);

export default Routes;
