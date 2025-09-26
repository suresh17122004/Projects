import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';

function App() {
  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Expense Tracker
          </Typography>
          <ExpenseForm />
          <ExpenseChart />
          <ExpenseList />
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
