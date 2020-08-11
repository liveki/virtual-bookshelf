import styled, { css } from 'styled-components';
import { makeStyles, createStyles } from '@material-ui/core';

interface ButtonProps {
  isFilled: boolean;
}

export const Button = styled.button<ButtonProps>`
  float: right;
  width: 18.1rem;
  height: 3.6rem;
  border: 0;
  border-radius: 0.4rem;
  background: #47bb53;
  font: 500 2rem Roboto;
  color: #fff;
  outline: 0;
  cursor: pointer;

  ${(props) =>
    !props.isFilled &&
    css`
       {
        background: #d1ccc5;
        color: #72685a;
      }
    `}

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const useStyle = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    inputLabel: {
      font: '500 2rem Roboto',
      color: '#B5B5B5',
      marginTop: '2rem',
    },
    input: {
      width: '100%',
      height: '5rem',
      background: '#EFEFEF',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '0.4rem',
      font: '500 2rem Roboto',
      paddingLeft: '0.5rem',
    },
    textArea: {
      width: '100%',
      resize: 'vertical',
      minHeight: '13.2rem',
      maxHeight: '13.2rem',
      background: '#EFEFEF',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '0.4rem',
      font: '500 2rem Roboto',
      paddingLeft: '0.5rem',
      outline: 0,
      paddingTop: '0.3rem',
    },
  })
);
