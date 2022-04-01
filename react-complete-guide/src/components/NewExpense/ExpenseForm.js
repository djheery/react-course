import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  
  /**
   * SEPARATE METHOD OF UPDATING USER INPUT BY PASSING AN OBJECT INTO useState({...})
   * 
   * const [userInput, setUserInput] = useState({
   *    enteredTitle = '',
   *    enteredAmount = '',
   *    enteredDate = ''
   * })  
   * 
   * When you use state like this you should pass an anonymous method into the method that 
   * is responsible for updating state (in this case setUserInput)
   * 
   * This method contains a reference to the previous state of the object. You can use this 
   * with the spread operator to reference the current state of the object, then override only the part necessary.
   * 
   * By using this approach, you always guarantee that the prevState is the current state of the object. 
   * Due to the way react schedules updates, if you use the approach without the anonymous method being 
   * passed to the setUserInput method, you may be referencing a past state and not the current state.
   * 
   * const titleChangeHandler2 = (e) => setUserInput((prevState) => {
   *    return {..prevState, enteredTitle: e.target.value }
   * })
   * 
   */
  
  /**
   * I prefer this approach, as it is cleaner and more explicit.
   */

  const [enteredTitle, setEnteredTitle] = useState(''); 
  const [enteredAmount, setEnteredAmount] = useState('0'); 
  const [enteredDate, setEnteredDate] = useState('2022-01-01'); 

  const titleChangeHandler = (e) => setEnteredTitle(e.target.value);
  const amountChangeHandler = (e) => setEnteredAmount(e.target.value);
  const dateChangeHandler = (e) => setEnteredDate(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData);
    
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('2022-01-01');
  }

  const showButton = () => {
    <div className="new-expense__actions">
      button
    </div>
  }



  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} min="2022-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onSubmit={showButton}>Add Expense</button>
      </div>
    </form>
  )

}

export default ExpenseForm