import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
