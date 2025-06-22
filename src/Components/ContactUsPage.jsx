// src/components/ContactUsPage.jsx
import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
} from '@mui/material';
import { styled } from '@mui/system';

// Custom styled TextField for rounded borders
// We target the root of the outlined input to apply the border-radius
const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: '10px', // Apply border-radius to the entire outlined input
        // You can also adjust font size or padding here if needed
        // '& fieldset': {
        //   borderColor: '#ccc', // Lighter border color
        // },
        // '&:hover fieldset': {
        //   borderColor: theme.palette.primary.main, // Hover state border color
        // },
        // '&.Mui-focused fieldset': {
        //   borderColor: theme.palette.primary.main, // Focused state border color
        // },
    },
    // You can also style the label if it needs custom positioning/color
    // '& .MuiInputLabel-root': {
    //   color: '#666',
    // },
    // '& .MuiInputLabel-root.Mui-focused': {
    //   color: theme.palette.primary.main,
    // },
}));

function ContactUsPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted!');
        // You would typically collect form data and send it to a backend
    };

    return (
        <Box
            sx={{
                p: { xs: 2, sm: 4 }, // Responsive padding
                backgroundColor: '#FDFCFE',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Center content horizontally
                mt: 8,
            }}
        >
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    mb: { xs: 4, md: 6 }, // Margin bottom for heading
                    fontWeight: 600,
                    color: '#333',
                }}
            >
                Contact
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 2, sm: 3 }, // Space between form fields
                    width: { xs: '90%', sm: '70%', md: '500px' }, // Responsive width for the form container
                    maxWidth: '600px', // Maximum width
                    // Ensure content within the form is left-aligned as in the image
                    alignItems: 'flex-start',
                }}
                noValidate // Disable browser's default validation to rely on MUI/React validation
                autoComplete="off"
            >
                {/* Name and Email fields side-by-side on larger screens */}
                <Box sx={{ display: 'flex', gap: { xs: 2, sm: 3 }, flexDirection: { xs: 'column', sm: 'row' }, width: '100%' }}>
                    <StyledTextField
                        label="Name"
                        variant="outlined"
                        fullWidth // Take full width within its flex item
                    />
                    <StyledTextField
                        label="Email "
                        variant="outlined"
                        fullWidth
                        required // Marks as required and adds asterisk to label
                    />
                </Box>

                <StyledTextField
                    label="Phone number"
                    variant="outlined"
                    fullWidth
                />

                <StyledTextField
                    label="Comment"
                    variant="outlined"
                    fullWidth
                    multiline // Enables multi-line input (textarea)
                    rows={4} // Sets the initial number of visible rows
                />

                <Button
                    type="submit" // Important for form submission
                    variant="contained"
                    sx={{
                        backgroundColor: '#333', // Dark background for the button
                        color: 'white',
                        borderRadius: '10px', // Rounded button
                        py: 1.5, // Vertical padding
                        px: 4,   // Horizontal padding
                        mt: { xs: 2, md: 3 }, // Margin top
                        '&:hover': {
                            backgroundColor: '#555', // Slightly lighter on hover
                        },
                        // The button should align with the text fields, which are flex-start
                    }}
                >
                    Send
                </Button>
            </Box>
        </Box>
    );
}

export default ContactUsPage;