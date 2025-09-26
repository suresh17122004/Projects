import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => (
  <AppBar position="sticky" elevation={0}>
    <Toolbar sx={{ px: { xs: 2, md: 6 } }}>
      <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
        TechStore
      </Typography>
      <Box>
        <Button color="inherit" href="#home">Home</Button>
        <Button color="inherit" href="#products">Products</Button>
        <Button color="inherit" href="#contact">Contact</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
