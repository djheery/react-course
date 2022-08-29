import React, { useState, useReducer } from 'react'

const knownInputs = {
  age: 'AGE',
  name: 'NAME'
}

const initialState = {
  value: '',
  isTouched: false
}

const inputStateReducer = (state, action) => {
  if(action.type === knownInputs.age) {
    return {}
  }
  return initialState
}

const useInput = (validateValueFn) => {
  // const [enteredValue, setEnteredValue] = useState('');
  // const [inputTouched, setInputTouched] = useState(false);
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState)

  const valueIsValid = validateValueFn(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const inputChangeHandler = (e) => {
    dispatch({type: 'input', value: e.target.value})
  }

  const inputBlurHandler = (e) => {
    dispatch()
  }

  const resetInput = (e) => {
    setEnteredValue('');
    setInputTouched(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError, 
    inputChangeHandler,
    inputBlurHandler,
    resetInput
  };
}

export default useInput;