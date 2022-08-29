import React, { useState } from "react"

const useInput = (checkFn) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const inputCheck = checkFn()
  const inputIsInvalid = !isValid && isTouched;
  
  const enteredValueChange = (e) => setEnteredValue(e.target.value);
  const inputBlurListener = (e) => setIsTouched(true);


  return {
    enteredValue, 
    isValid, 
    isTouched, 
    inputIsInvalid, 
    enteredValueChange,
    inputBlurListener,
  }
}

export default useInput;