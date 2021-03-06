import styled, { css } from 'styled-components';
import { makeStyles, createStyles } from '@material-ui/core';

interface ButtonProps {
  isSaveType?: boolean;
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

export const useStyle = makeStyles(() =>
  createStyles({
    modalContainer: {
      '& .MuiDialog-paperWidthSm': {
        width: '50%',
        '@media (max-width:700px)': {
          width: '100%',
        },
      },
    },
    modalTitle: {
      '& h2': {
        font: '500 1.8rem Roboto',
      },
    },
    modalTextArea: {
      width: '100%',
      resize: 'vertical',
      minHeight: '20.5rem',
      maxHeight: '20.5rem',
      background: '#EFEFEF',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '0.4rem',
      font: '300 1.6rem Roboto',
      paddingLeft: '0.5rem',
      outline: 0,
      paddingTop: '0.3rem',
    },
  })
);
