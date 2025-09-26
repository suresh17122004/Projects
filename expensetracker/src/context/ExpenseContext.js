import React, { createContext, useState } from 'react';

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, removeExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseProvider;
