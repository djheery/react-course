import React, { useRef, useState } from "react";
import classes from './MealItemForm.module.css'
import Input from '../UI/Input/Input';

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const [inputIsValid, setAmountIsValid] = useState(true)
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;


    if(!isInputValid(enteredAmount, enteredAmountNumber)) {
      setAmountIsValid(false);
      return
    }

    props.onAddToCart(enteredAmountNumber);
    
  }

  const isInputValid = (inputText, inputNumber) => {
    let inputValid = true;

    if(inputText.trim().length === 0)
      inputValid = false;
    if(inputNumber < 1 || inputNumber > 5)
      inputValid = false;

    return inputValid;
  }
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Amount" 
               ref={amountInputRef}
               input={{
                 id: 'amount_' + props.id,
                 type:'number',
                 min: '1',
                 max: '5',
                 step: '1',
                 defaultValue: '1'
               }}/>
        <button>+ Add</button>
        {!inputIsValid && <p>Please enter a valid amount 1 - 5</p>}        
    </form>
  )
}

export default MealItemForm;