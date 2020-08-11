import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { makeStyles, createStyles } from '@material-ui/core';

interface buttomProps {
  isDeleteType?: boolean;
}

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  margin-top: 3rem;
  margin-bottom: 2rem;
  svg {
    cursor: pointer;
  }

  @media (max-width: 700px) {
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
  transition: background-color 0.2s;

  ${(props) =>
    props.isDeleteType &&
    css`
      color: #ff2626;
    `}

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:hover {
    background: ${shade(0.05, '#f7f5f5')};
  }
`;

export const useStyle = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    bookContainer: {
      display: 'flex',
      marginTop: '3rem',
      '@media (max-width:700px)': {
        alignItems: 'center',
      },
    },
    img: {
      width: '17.6rem',
      height: '30.3rem',
      '@media (max-width:700px)': {
        display: 'none',
      },
    },
    bookDetail: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '4rem',
      '& strong': {
        color: '#7D4715',
        font: '500 1.8rem Roboto',
      },
      '& span': {
        color: '#7D4715',
        font: '300 1.8rem Roboto',
        marginBottom: '1rem',
      },
      '& p': {
        color: '#7D4715',
        font: '300 1.8rem Roboto',
        textAlign: 'justify',
        marginBottom: '1rem',
      },
      '@media (max-width:700px)': {
        width: '100%',
        marginLeft: '0',
      },
    },
    commentContainer: {
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      marginBottom: '2rem',
      '& button': {
        width: '11.2rem',
        height: '4.2rem',
        border: '0',
        background: '#7d4715',
        borderRadius: '0.4rem',
        outline: '0',
        color: '#fff',
        font: '400 2rem Roboto',
        marginTop: '1.3rem',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        '&:hover': {
          background: `${shade(0.2, '#7d4715')}`,
        },
      },
    },
    input: {
      width: '100%',
      height: '5rem',
      background: '#E5E5E5',
      font: '500 2rem Roboto',
      paddingLeft: '1.7rem',
      borderRadius: '0.4rem',
      marginTop: '3.5rem',
      marginBottom: '2.3rem',
      border: '0',
    },
    textArea: {
      width: '100%',
      resize: 'vertical',
      minHeight: '13.2rem',
      maxHeight: '13.2rem',
      background: '#E5E5E5',
      border: '0',
      borderRadius: '0.4rem',
      font: '500 2rem Roboto',
      paddingLeft: '1.7rem',
      outline: 0,
      paddingTop: '1.3rem',
    },
    commentCounter: {
      font: '400 2rem Roboto',
      color: '#676767',
      marginTop: '1rem',
    },
    commentList: {
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
      marginBottom: '3.6rem',
    },
    authorInfo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1.3rem',
    },
    comment: {
      marginTop: '1.4rem',
      background: '#F7F7F7',
      '& p': {
        font: '300 1.6rem Roboto',
        marginBottom: '2.9rem',
      },
      '& strong': {
        font: '400 1.8rem Roboto',
        marginRight: '4.8rem',
      },
      '& span': {
        font: '300 1.8rem Roboto',
      },
    },
    select: {
      marginBottom: '3rem',
      border: '0',
      borderRadius: '0.4rem',
      background: '#DAA281',
      outline: '0',
      font: '400 1.8rem Roboto',
      width: '15rem',
      color: '#fff',
    },
  })
);
