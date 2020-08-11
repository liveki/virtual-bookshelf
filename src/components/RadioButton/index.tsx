import React from 'react';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';

const RadioButton = withStyles({
  root: {
    color: '#7D4715',
    '&$checked': {
      color: '#7D4715',
    },
  },
  checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);

export default RadioButton;
