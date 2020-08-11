import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles, createStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import * as bookActions from '../../store/ducks/books/actions';

const useStyles = makeStyles(() =>
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
    radioButton: {
      color: '#7d4715',
    },
  })
);

const RadioFilterBook: React.FC = () => {
  const [value, setValue] = useState('sortByTitle');
  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (value === 'sortByTitle') {
      dispatch(bookActions.sortByTitleRequest());
    } else {
      dispatch(bookActions.sortByDateRequest());
    }
  }, [dispatch, value]);

  return (
    <FormControl component="fieldset" className={styles.radioContainer}>
      <FormLabel component="legend" className={styles.radioLabel}>
        Ordenar por:
      </FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.radioButtonText}
      >
        <FormControlLabel
          value="sortByTitle"
          control={
            <Radio
              style={{
                color: '#7d4715',
              }}
            />
          }
          label="Título"
        />
        <FormControlLabel
          value="sortByDate"
          control={
            <Radio
              style={{
                color: '#7d4715',
              }}
            />
          }
          label="Data de criação"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioFilterBook;
