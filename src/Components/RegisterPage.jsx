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

function RegisterPage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        cell: '',
        password: '',
    });
    const [toast, setToast] = useState({ open: false, message: '', severity: 'info' });

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save user to sessionStorage
        sessionStorage.setItem('registeredUser', JSON.stringify(form));

        // Show success toast
        setToast({ open: true, message: 'Registration successful!', severity: 'success' });

        // Proceed after delay
        setTimeout(() => {
            login(form.email);
            navigate('/login');
        }, 1000);
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

                {/* Heading */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Register
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                    Create your account by filling the form
                </Typography>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="name"
                        label="Full Name"
                        fullWidth
                        required
                        value={form.name}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        required
                        value={form.email}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        name="cell"
                        label="Contact Number"
                        type="tel"
                        fullWidth
                        required
                        value={form.cell}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        required
                        value={form.password}
                        onChange={handleChange}
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
                        Register
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

                {/* Login Link */}
                <Box sx={{ mt: 2 }}>
                    <Typography variant="caption">
                        Already have an account?{' '}
                        <MuiLink href="/Ecom/login" underline="hover" sx={{ color: '#800000', fontWeight: 'bold' }}>
                            Login
                        </MuiLink>
                    </Typography>
                </Box>
            </Paper>

            {/* Toast */}
            <Snackbar
                open={toast.open}
                autoHideDuration={3000}
                onClose={handleToastClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={handleToastClose} severity={toast.severity} sx={{ width: '100%' }}>
                    {toast.message}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default RegisterPage;
