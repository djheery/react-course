import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 6, 1),
  },
  {
    id: "e2",
    title: "Fender Custom Shop 1960",
    amount: 3020.67,
    date: new Date(2021, 6, 2),
  },
  {
    id: "e3",
    title: "Chelsea Top",
    amount: 70,
    date: new Date(2021, 6, 2),
  },
  {
    id: "e4",
    title: "Solicitors",
    amount: 980.99,
    date: new Date(2021, 6, 2),
  },
];

const App = () => {

  const [enteredExpenseData, setNewExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => setNewExpense((prevExpenses) => {
    return [expenseData, ...prevExpenses]
  });

  return (
    <div>
      <NewExpense onNewExpense={addExpenseHandler} />
      <Expenses expenses={enteredExpenseData} />
    </div>
  );
};

export default App;
