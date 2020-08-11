import styled, { css } from 'styled-components';

export const BookFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.8rem;
  cursor: pointer;
  outline: 0;

  font: 400 2rem Roboto;
  width: 18.1rem;
  height: 3.6rem;
  border: 0;
  border-radius: 0.4rem;
  background: #7d4715;
  color: #fff;

  svg {
    color: #fff;
  }
`;

export const SearchFieldTitle = styled.strong`
  font: 500 2rem Roboto;
  color: #7d4715;
  display: flex;
  margin-top: 5rem;
`;

css`
  @media (min-width: 700px) {
    #makeStyles-booksWantToReadContent-12 {
      width: 1rem;
    }
  }
`;
