import styled, { css } from 'styled-components';

interface buttomProps {
  isDeleteType?: boolean;
}

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    cursor: pointer;
  }
`;

export const Button = styled.button<buttomProps>`
  width: 11.3rem;
  height: 4.2rem;
  background: #f7f5f5;
  border: 0;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 0.4rem;
  margin-left: 1.7rem;
  font: 400 2rem Roboto;
  color: #959393;
  cursor: pointer;

  ${(props) =>
    props.isDeleteType &&
    css`
      color: #ff2626;
    `}

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
