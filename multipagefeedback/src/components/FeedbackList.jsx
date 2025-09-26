import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function FeedbackList({ feedbacks }) {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>All Feedbacks</Typography>
      <List>
        {feedbacks.map((fb) => (
          <ListItem key={fb.id} secondaryAction={
            <Button variant="outlined" onClick={() => navigate(`/feedback/${fb.id}`)}>View</Button>
          }>
            <ListItemText primary={fb.name} secondary={fb.message.slice(0, 30) + '...'} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default FeedbackList;
