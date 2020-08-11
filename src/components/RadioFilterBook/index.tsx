import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RadioButton from '../RadioButton';

import * as bookActions from '../../store/ducks/books/actions';

import {
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';

import { useStyles } from './styles';

const RadioFilterBook: React.FC = () => {
  const [value, setValue] = useState('sortByTitleASC');
  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (value === 'sortByTitleASC') {
      dispatch(bookActions.sortByTitleASCRequest());
    } else if (value === 'sortByTitleDESC') {
      dispatch(bookActions.sortByTitleDESCRequest());
    } else if (value === 'sortByDateASC') {
      dispatch(bookActions.sortByDateASCRequest());
    } else {
      dispatch(bookActions.sortByDateDESCRequest());
    }
  }, [dispatch, value]);

  return (
    <FormControl component="fieldset" className={styles.radioContainer}>
      <FormLabel component="legend" className={styles.radioLabel}>
        Ordenar por:
      </FormLabel>
      <RadioGroup
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.radioButtonText}
      >
        <FormControlLabel
          value="sortByTitleASC"
          control={<RadioButton />}
          label="Título: crescente"
        />
        <FormControlLabel
          value="sortByTitleDESC"
          control={<RadioButton />}
          label="Título: decrescente"
        />
        <FormControlLabel
          value="sortByDateASC"
          control={<RadioButton />}
          label="Data de criação: crescente"
        />
        <FormControlLabel
          value="sortByDateDESC"
          control={<RadioButton />}
          label="Data de criação: decrescente"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioFilterBook;
