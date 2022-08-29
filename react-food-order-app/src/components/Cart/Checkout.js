import React from "react";
import classes from './Checkout.module.css';
import useInput from "../../hooks/useInput";

const Checkout = (props) => {

  const stringCheck = (e) => e.target.value.trim() !== '';
  const emailCheck = (e) => e.target.value.includes('@');
  const {
          enteredValue: enteredName,
          isValid: nameIsValid, 
          isTouched: nameIsTouched, 
          inputIsValid: nameInputIsValid, 
          enteredValueChange: nameEnteredValueChange, 
          inputBlurListener: nameInputBlurListener,
        } = useInput(stringCheck);


  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameEnteredValueChange} onBlur={nameInputBlurListener}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' />
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' />
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' />
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;