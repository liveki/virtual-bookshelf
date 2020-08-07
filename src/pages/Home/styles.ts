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
  margin-top: 9.1rem;
  cursor: pointer;
  outline: 0;

  font: 400 2rem Roboto;
  float: right;
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
