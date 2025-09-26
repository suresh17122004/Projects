import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function FeedbackForm({ setFeedbacks }) {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbacks(prev => [...prev, { ...formData, id: Date.now().toString() }]);
    navigate('/feedbacks');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Submit Feedback</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          margin="normal"
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={4}
          margin="normal"
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
      </form>
    </Container>
  );
}

export default FeedbackForm;
