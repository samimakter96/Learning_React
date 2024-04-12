import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: '1',
    date: new Date(2024, 3, 15),
    title: 'Insurance',
    price: 100,
    location: 'Bangalore',
  },
  {
    id: '2',
    date: new Date(2025, 4, 14),
    title: 'Book',
    price: 10,
    location: 'Delhi',
  },
  {
    id: '3',
    date: new Date(2026, 2, 8),
    title: 'Pen',
    price: 1,
    location: 'Hyderabad',
  },
  {
    id: '4',
    date: new Date(2025, 1, 5),
    title: 'Laptop',
    price: 200,
    location: 'Mumbai',
  },
];

const App =() => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
