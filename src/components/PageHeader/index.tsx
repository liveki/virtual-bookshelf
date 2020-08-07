import React from 'react';

import { Header } from './styles';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface headerProps {
  description?: string;
  backControl?: boolean;
}

const PageHeader: React.FC<headerProps> = ({
  description,
  backControl = false,
}) => {
  return (
    <Header>
      <h1>Virtual Bookshelf</h1>
      {description && <span>{description}</span>}
      {backControl && (
        <Link to="/">
          <FaArrowLeft size={30} />
        </Link>
      )}
    </Header>
  );
};

export default PageHeader;
