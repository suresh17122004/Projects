import React, { useState, useEffect, useRef } from 'react';
import { TextField, Container, Grid, Typography, CircularProgress } from '@mui/material';
import BookCard from './components/BookCard';
import './App.css';

function App() {
  const [query, setQuery] = useState('harry potter');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await res.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error('Failed to fetch books:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(inputRef.current.value);
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center" sx={{ mt: 4 }}>
        📚 Book Explorer
      </Typography>
      <form onSubmit={handleSearch} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <TextField
          inputRef={inputRef}
          label="Search for books"
          variant="outlined"
          sx={{ width: '50%' }}
        />
      </form>

      {loading ? (
        <div style={{ textAlign: 'center' }}><CircularProgress /></div>
      ) : (
        <Grid container spacing={3}>
          {books.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book.id}>
              <BookCard book={book} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default App;
