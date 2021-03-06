import React, { HTMLAttributes } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { Header } from './styles';

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
      <Link to="/">Virtual Bookshelf</Link>
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
