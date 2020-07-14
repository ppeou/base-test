import React, {useState} from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  error: {
    border: 'solid 1px red'
  },
  errorMessage: {
    color: 'red',
    padding: '0',
    margin: '0'
  }
});

const NumericInput = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const classes = useStyles();

  const onChange = ({target: {value: userInput}}) => {
    const number = parseFloat(userInput);

    let errorStr = '';
    if (Number.isNaN(number)) {
      errorStr = 'invalid number';
    }
    setValue(userInput);
    setError(errorStr);
  };

  return (<div>
    <label htmlFor="my-input">Enter Number:</label>
    <input className={ !!error ? classes.error : '' }
      type="text" id="my-input"
      value={value} onChange={onChange} />
    {error ? <p className={classes.errorMessage}>{error}</p> : ''}
  </div>);
};

export default NumericInput;