// src/theme.js
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        fontFamily: ['Inter', 'sans-serif'].join(','), // Or any similar sans-serif font
        h4: {
            fontWeight: 600,
            color: '#4A2B2B', // A reddish-brown for the main headings
        },
        h6: {
            fontWeight: 500,
        },
    },
    palette: {
        primary: {
            main: '#FFB6C1', // Light pink for buttons or highlights
        },
        text: {
            primary: '#333',
            secondary: '#666',
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#F8E7EE', // Light pink background for buttons
                    color: '#CD6A91', // Darker pink for icons
                    '&:hover': {
                        backgroundColor: '#F0D4DF',
                    },
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;