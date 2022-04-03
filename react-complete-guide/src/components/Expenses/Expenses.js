import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [currentYear, setCurrentYear] = useState("Show All");

  /**
   * Set the current year for the purpose of filtering the expenses.
   * @param {*} currentYearChanged The year to filter the expenses by
   */

  const currentYearHandler = (currentYearChanged) => {
    setCurrentYear(currentYearChanged)
  }

  /**
   * Filter the expenses by year. 
   */

  const filteredExpenses = props.expenses.filter(expense => {
    if(currentYear === 'Show All') {
      return expense
    } else {
      return expense.date.getFullYear().toString() === currentYear;
    }
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={currentYear} onCurrentYearChange={currentYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
