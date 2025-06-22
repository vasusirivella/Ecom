import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Link as MuiLink,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './authContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate('/');
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
          sx={{ color: '#800000', fontWeight: 'bold', mb: 2, fontFamily: 'serif' }}
        >
          पहरन
        </Typography>
        <Typography variant="caption" display="block" sx={{ color: '#800000', mb: 3 }}>
          crafted with love...
        </Typography>

        {/* Sign in Text */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Sign in
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Enter your email and we’ll send you a verification code
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
      </Paper>
    </Box>
  );
}

export default LoginPage;
