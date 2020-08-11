import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    radioContainer: {
      '& span': {
        font: '400 1.5rem Roboto',
      },
    },
    radioLabel: {
      font: '400 1.8rem Roboto',
    },
    radioButtonText: {
      color: '#7d4715',
    },
  })
);
