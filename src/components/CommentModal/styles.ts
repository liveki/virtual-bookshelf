import styled, { css } from 'styled-components';

interface ButtonProps {
  isSaveType?: boolean;
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
    props.isSaveType &&
    css`
      background: #17b21a;
    `}
`;

export const ToggleModalButton = styled.button`
  border: none;
  color: #c3c3c3;
  background: transparent;
  margin-right: 0.5rem;
  outline: 0;
`;
