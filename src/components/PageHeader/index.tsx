import React, { HTMLAttributes } from 'react';

import { Header } from './styles';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface headerProps extends HTMLAttributes<HTMLHeadElement> {
  description?: string;
  backControl?: boolean;
}

const PageHeader: React.FC<headerProps> = ({
  description,
  backControl = false,
  children,
}) => {
  return (
    <Header>
      <h1>Virtual Bookshelf</h1>
      {description && (
        <span>
          {description} {children}{' '}
        </span>
      )}
      {backControl && (
        <Link to="/">
          <FaArrowLeft size={30} />
        </Link>
      )}
    </Header>
  );
};

export default PageHeader;
