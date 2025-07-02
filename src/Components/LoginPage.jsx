import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Link as MuiLink,
  Snackbar,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './authContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toast, setToast] = useState({ open: false, message: '', severity: 'info' });

  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(sessionStorage.getItem('registeredUser'));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
      // Store only non-sensitive info again (optional)
      sessionStorage.setItem(
        'user',
        JSON.stringify({
          name: storedUser.name,
          email: storedUser.email,
          cell: storedUser.cell,
        })
      );

      // Show success toast
      setToast({ open: true, message: 'Login successful!', severity: 'success' });

      // Proceed after short delay
      setTimeout(() => {
        login(email);
        navigate('/');
      }, 1000);
    } else {
      setToast({ open: true, message: 'Invalid email or password', severity: 'error' });
    }
  };


  const handleToastClose = () => {
    setToast({ ...toast, open: false });
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: 350,
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        {/* Logo */}
        <Typography
          variant="h4"
          sx={{
            color: '#800000',
            fontWeight: 'bold',
            mb: 2,
            fontFamily: 'serif',
          }}
        >
          पहरन
        </Typography>
        <Typography
          variant="caption"
          display="block"
          sx={{ color: '#800000', mb: 3 }}
        >
          crafted with love...
        </Typography>

        {/* Sign in Text */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Sign in
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Enter your email and password to continue
        </Typography>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            fullWidth
            sx={{
              backgroundColor: '#e8a3b3',
              color: 'black',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#d88ea2',
              },
            }}
          >
            Continue
          </Button>
        </form>

        {/* Footer */}
        <Box sx={{ mt: 3 }}>
          <MuiLink href="#" variant="caption" sx={{ mr: 2 }}>
            Privacy
          </MuiLink>
          <MuiLink href="#" variant="caption">
            Terms
          </MuiLink>
        </Box>

        {/* Register Link */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="caption">
            Don't have an account?{' '}
            <MuiLink href="/Ecom/register" underline="hover" sx={{ color: '#800000', fontWeight: 'bold' }}>
              Register
            </MuiLink>
          </Typography>
        </Box>
      </Paper>

      {/* Snackbar Toast */}
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={handleToastClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // <-- TOP RIGHT
      >
        <Alert onClose={handleToastClose} severity={toast.severity} sx={{ width: '100%' }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default LoginPage;
