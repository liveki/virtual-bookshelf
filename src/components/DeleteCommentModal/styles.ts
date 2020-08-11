import styled, { css } from 'styled-components';

interface ButtonProps {
  isDeleteType?: boolean;
}

export const Button = styled.button<ButtonProps>`
  border: 0;
  border-radius: 0.4rem;
  outline: 0;
  font: 400 2rem Roboto;
  padding: 0.2rem 0.5rem;
  background: #82888b;
  color: #fff;
  cursor: pointer;

  ${(props) =>
    props.isDeleteType &&
    css`
      background: #ff2626;
    `}
`;

export const ToggleModalButton = styled.button`
  border: none;
  color: #ff2626;
  background: transparent;
  margin-right: 0.5rem;
  outline: 0;
`;
