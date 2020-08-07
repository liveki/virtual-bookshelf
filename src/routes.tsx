import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookManager from './pages/BookManager';
import BookDetail from './pages/BookDetail';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/book-manager" component={BookManager} />
    <Route path="/book-detail" component={BookDetail} />
  </BrowserRouter>
);

export default Routes;
