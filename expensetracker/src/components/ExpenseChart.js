import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function ExpenseChart() {
  const { expenses } = useContext(ExpenseContext);

  const data = expenses.map((expense) => ({
    name: expense.title,
    amount: expense.amount,
  }));

  return (
    <div style={{ width: '100%', height: 300, marginBottom: '2rem' }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="amount" fill="#1976d2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;
