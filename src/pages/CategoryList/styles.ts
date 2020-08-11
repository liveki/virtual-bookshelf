import styled from 'styled-components';
import { makeStyles, createStyles } from '@material-ui/core';

export const BookFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CategoryTitle = styled.h1`
  font-family: Roboto;
  color: #7d4715;
  text-align: center;
  margin-top: 3rem;
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
    booksWithoutCategory: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: '5rem',
      marginTop: '0.5rem',
      marginBottom: '9.6rem',
      flexWrap: 'wrap',
      borderTop: '2px solid rgba(125, 71, 21, 0.2)',
      '@media(max-width:700px)': {
        flexDirection: 'column',
      },
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
  })
);
