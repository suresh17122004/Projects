import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function ExpenseList() {
  const { expenses, removeExpense } = useContext(ExpenseContext);

  return (
    <List>
      {expenses.map((expense) => (
        <ListItem
          key={expense.id}
          secondaryAction={
            <IconButton edge="end" onClick={() => removeExpense(expense.id)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={expense.title}
            secondary={`$${expense.amount.toFixed(2)}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default ExpenseList;
