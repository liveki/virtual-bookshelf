import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { makeStyles, createStyles } from '@material-ui/core';

interface ButtonProps {
  isDeleteType?: boolean;
}

export const Button = styled.button<ButtonProps>`
  border: 0;
  border-radius: 0.4rem;
  outline: 0;
  font: 400 2rem Roboto;
  padding: 0.5rem;
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
  width: 11.3rem;
  height: 4.2rem;
  background: #f7f5f5;
  border: 0;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 0.4rem;
  margin-left: 1.7rem;
  font: 400 2rem Roboto;
  cursor: pointer;
  color: #ff2626;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  outline: 0;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.05, '#f7f5f5')};
  }
`;

export const useStyle = makeStyles(() =>
  createStyles({
    modalContainer: {
      '& .MuiDialog-paperWidthSm': {
        width: '50%',
      },
    },
    modalTitle: {
      '& h2': {
        font: '500 1.8rem Roboto',
      },
    },
    modalContentText: {
      font: '300 1.8rem Roboto',
    },
  })
);
