import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const savedExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    
    props.onNewExpense(expenseData);
    startEditingHandler()
  }
  
  const startEditingHandler = () => {
    isEditing === false ? setIsEditing(true) :
                          setIsEditing(false);
  }


  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={savedExpenseDataHandler} onCancel={startEditingHandler} />}
    </div>
  )
}

export default NewExpense