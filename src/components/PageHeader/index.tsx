import React, { HTMLAttributes } from 'react';

import { Header } from './styles';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

interface headerProps extends HTMLAttributes<HTMLHeadElement> {
  description?: string;
  backControl?: boolean;
}

const PageHeader: React.FC<headerProps> = ({
  description,
  backControl = false,
  children,
}) => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <Header>
      <h1>Virtual Bookshelf</h1>
      {description && (
        <span>
          {description} {children}{' '}
        </span>
      )}
      {backControl && (
        <button onClick={handleGoBack}>
          <FaArrowLeft size={30} />
        </button>
      )}
    </Header>
  );
};

export default PageHeader;
