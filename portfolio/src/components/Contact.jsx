import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
        <Button variant="contained" sx={{ mt: 2 }}>
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
