import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

function PaymentPage() {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const handlePayment = () => {
    alert('Payment Successful!');
    dispatch({ type: 'CLEAR_CART' });
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Payment Page</Typography>
      <Typography>Total Items: {cart.length}</Typography>
      <Button variant="contained" color="success" onClick={handlePayment}>
        Pay Now
      </Button>
    </Container>
  );
}

export default PaymentPage;