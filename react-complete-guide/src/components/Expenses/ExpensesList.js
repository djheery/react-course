import React, { useLayoutEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
  let expensesContent = <h2 className="expenses-list__fallback">Found no expenses.</h2>
  if(props.items.length === 0) return expensesContent;

  return (
    <ul className="expenses-list">
      {props.items.map(i => <ExpenseItem 
                                key={i.id}
                                title={i.title} 
                                amount={i.amount} 
                                date={i.date} 
                            />)}
    </ul>
  )
  
}

export default ExpensesList;