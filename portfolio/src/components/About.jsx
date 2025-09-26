import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        I’m a passionate front-end developer skilled in React and Material UI. I love creating beautiful and responsive web interfaces.
      </Typography>
    </Container>
  );
};

export default About;
