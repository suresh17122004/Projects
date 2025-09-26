import React from 'react';
import { Box, Grid, Typography, Button, Container } from '@mui/material';

const Hero = () => (
  <Box id="home" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
    <Container>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Elevate Your Tech
          </Typography>
          <Typography variant="h6" mb={4}>
            Discover cutting‑edge gadgets designed to enhance your lifestyle.
          </Typography>
          <Button variant="contained" size="large" color="secondary" href="#products">
            Browse Products
          </Button>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Hero;
