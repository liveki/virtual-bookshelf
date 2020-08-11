import styled, { css } from 'styled-components';
import { makeStyles, createStyles } from '@material-ui/core';
import { shade } from 'polished';

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
  transition: background-color 0.2s;

  svg {
    color: #fff;
  }

  &:hover {
    background: ${shade(0.2, '#7d4715')};
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

export const useStyle = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input: {
      width: '27.9rem',
      background: '#CA9B6F',
      borderRadius: '0.4rem',
      color: '#fff',
      fontFamily: 'Roboto',
      fontWeight: 'normal',
      fontSize: '2rem',
      paddingLeft: '1.1rem',
      marginTop: '-2.5rem',
      margin: '0 auto',
    },
    card: {
      background: '#FEE8CD',
      display: 'flex',
      alignItems: 'center',
      width: '25.4rem',
      height: '16.9rem',
      transition: 'transform 0.2s',
      cursor: 'pointer',
      marginBottom: '3rem',
      '&:hover': {
        transform: 'translateY(-5px) translateX(5px)',
      },
    },
    cardContent: {
      display: 'flex',
      alignItems: 'center',
    },
    cardImg: {
      width: '8.2rem',
      height: '15.1rem',
    },
    cardTextContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    cardText: {
      font: '500 1.8rem Roboto',
      color: '#7D4715',
      marginLeft: '1.5rem',
    },
    cardCreatedAtText: {
      font: '300 1.8rem Roboto',
      color: '#7D4715',
      marginTop: '2.9rem',
      marginLeft: '1.5rem',
    },

    link: {
      display: 'flex',
      width: 'fit-content',
      alignItems: 'center',
      textDecoration: 'none',
      color: '#7D4715',
      font: '400 2rem Roboto',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      '& svg': {
        marginLeft: '1rem',
      },
    },
    booksContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '4.6rem',
    },
    booksContent: {
      paddingTop: '2.6rem',
      borderTop: '2px solid rgba(125, 71, 21, 0.2)',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      '@media (max-width:700px)': {
        flexDirection: 'column',
      },
    },
    buttonsContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4rem 0',
      '@media (max-width:700px)': {
        flexDirection: 'column',
        '& button': {
          margin: '5rem 0',
        },
      },
    },
  })
);
