import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import products from '../data/products';

const Products = () => (
  <Container
    id="products"
    sx={{
      py: 10, // vertical padding
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div style={{ width: '100%' }}>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={700}
        gutterBottom
      >
        Featured Products
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center" // ✅ horizontal center
        alignItems="stretch"
        sx={{ mt: 2, px: { xs: 1, sm: 5, md: 6 } }} // ✅ horizontal padding
      >
        {products.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: 3, 
                '&:hover': {
                  boxShadow: 6, 
                },
                transition: 'box-shadow 0.3s ease-in-out', 

              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={item.img}
                alt={item.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" fontWeight={600}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ mt: 1 }}
                  color="secondary.main"
                >
                  {item.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button fullWidth variant="contained">
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  </Container>
);
export default Products;