import React, { useState, useContext } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { ExpenseContext } from '../context/ExpenseContext';

function ExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const { addExpense } = useContext(ExpenseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    addExpense({ title, amount: parseFloat(amount) });
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} mb={3}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Amount"
          variant="outlined"
          fullWidth
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Add Expense
        </Button>
      </Stack>
    </form>
  );
}

export default ExpenseForm;
