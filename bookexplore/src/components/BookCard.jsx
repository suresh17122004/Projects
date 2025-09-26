import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';

function BookCard({ book }) {
  const volumeInfo = book.volumeInfo;
  const thumbnail = volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x195.png?text=No+Image';
  const title = volumeInfo.title;
  const authors = volumeInfo.authors?.join(', ') || 'Unknown Author';
  const previewLink = volumeInfo.previewLink;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        image={thumbnail}
        alt={title}
        sx={{ height: 300, objectFit: 'contain' }}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {authors}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={previewLink} target="_blank">
          Preview
        </Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;
