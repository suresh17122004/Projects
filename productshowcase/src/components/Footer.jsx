import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => (
  <AppBar position="static" color="primary" sx={{ mt: 8 }}>
    <Toolbar sx={{ justifyContent: 'center' }}>
      <Typography variant="body2" color="inherit">
        © {new Date().getFullYear()} TechStore. All rights reserved.
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Footer;
