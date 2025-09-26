import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

function FeedbackDetails({ feedbacks }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const feedback = feedbacks.find(fb => fb.id === id);

  if (!feedback) {
    return (
      <Container>
        <Typography variant="h6">Feedback not found</Typography>
        <Button onClick={() => navigate('/feedbacks')}>Go Back</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">{feedback.name}</Typography>
      <Typography variant="body1" mt={2}>{feedback.message}</Typography>
      <Button onClick={() => navigate('/feedbacks')} variant="contained" sx={{ mt: 2 }}>Back</Button>
    </Container>
  );
}

export default FeedbackDetails;
