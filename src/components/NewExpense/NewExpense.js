import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const savaExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing === false && (
        <button
          type="button"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Add Expense
        </button>
      )}
      {isEditing === true && (
        <ExpenseForm
          onSaveExpenseData={savaExpenseDataHandler}
          onCancel={() => {
            setIsEditing(false);
          }}
        />
      )}
    </div>
  );
};

export default NewExpense;
