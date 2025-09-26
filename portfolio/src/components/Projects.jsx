import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const projects = [
  { title: 'Project One', description: 'Description of project one' },
  { title: 'Project Two', description: 'Description of project two' },
  { title: 'Project Three', description: 'Description of project three' }
];

const Projects = () => {
  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
