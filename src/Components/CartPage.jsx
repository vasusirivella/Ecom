import React from 'react';
import { useCart } from './CartContext';
import { Container, Typography, List, ListItem, ListItemText, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Cart</Typography>
      <List>
        {cart.map(item => (
          <ListItem key={item.id} secondaryAction={
            <IconButton edge="end" onClick={() => handleRemove(item.id)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={item.name} secondary={item.price} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={() => navigate('/payment')}>Proceed to Payment</Button>
    </Container>
  );
}

export default CartPage;