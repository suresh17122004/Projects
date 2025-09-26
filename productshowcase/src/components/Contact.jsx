import React from 'react';
import { Container, Typography, Grid, TextField, Button, Box, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => (
  <Box id="contact" sx={{ py: 10, backgroundColor: 'grey.100' }}>
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: { xs: 3, sm: 5 } }}>
        <Typography variant="h4" fontWeight={700} align="center" gutterBottom>
          Get in Touch
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Name" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" variant="outlined" fullWidth required type="email" />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" endIcon={<SendIcon />} fullWidth>
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  </Box>
);

export default Contact;
