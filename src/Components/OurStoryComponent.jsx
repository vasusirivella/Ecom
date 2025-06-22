// src/components/OurStoryComponent.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Import the image you want to place (e.g., a crown icon)
// Make sure you have this image file in your src/images/ directory
import crownImage from '../images/img/ourstory.jpg'; // Assuming you have a crown.png image

function OurStoryComponent() {
  return (
    <Box
      sx={{
        p: { xs: 3, sm: 6, md: 8 },
        backgroundColor: '#FDFCFE',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center content horizontally
        textAlign: 'center', // Center text within the box
        maxWidth: '900px',
        mx: 'auto',
      }}
    >
      {/* Image centered before the content */}
      <Box
        component="img"
        src={crownImage}
        alt="Crown icon"
        sx={{
          height: 'auto',
          mb: 2, // Margin bottom to separate from the title
        }}
      />

      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 4,
          fontWeight: 600,
          color: '#333',
        }}
      >
        From Besties to Maalkins 👑
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: '#555' }}>
        If you’ve ever made a random decision with your best friend and somehow turned it into the best
        thing ever—hi, welcome to our world.
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: '#555' }}>
        We are –Vidushi & Nehal, the Paramitras turned co-founders—had always wanted to create
        something of our own after college. So, we spent a year making content and tried a bunch of
        different things, from being micro-creators to social media managers, waiting for our <span style={{ fontWeight: 'bold' }}>big break.</span>
        But it never quite came.
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: '#555' }}>
        Then one random day, while roaming around Jaipur’s markets, we realized.........................................
        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>we’re obsessed with this city. The colors, the fabrics, the vibe—it’s too good to ignore.</span>
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: '#555' }}>
        So instead of just appreciating it, we did the most dramatic thing possible: <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>let’s start a clothing</span>
        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>brand without knowing anything about it.</span> We took up the challenge and did every possible idiotic
        thing to make it work. And somehow, through all the chaos and trial-and-error moments...
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: '#333', fontWeight: 'bold' }}>
        Pehrin was made—<span style={{ fontStyle: 'italic' }}>Straight out from your Pinterest dreams.</span>
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#555' }}>
        Fueled by passion, friendship, and an unnecessary number of trial and error
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#555', fontStyle: 'italic' }}>
        "It is a journey of learning the names of different fabrics"
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6, color: '#555' }}>
        A brand where every piece isn’t just stitched, but <span style={{ fontWeight: 'bold' }}>crafted</span>—with love, creativity, and a little bit of
        that Paramitra magic.
      </Typography>

      <Typography
        variant="h6"
        component="h3"
        sx={{
          mb: 4,
          fontWeight: 'bold',
          color: '#800000', // Maroon color from Navbar logo
        }}
      >
        Pehrin—by two Paramitras... Sirf tumahre nakhro ke liye
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to="/women/all"
        sx={{
          backgroundColor: '#333',
          color: 'white',
          borderRadius: '5px',
          py: 1.5,
          px: 4,
          textTransform: 'none',
          fontSize: '1rem',
          '&:hover': {
            backgroundColor: '#555',
          },
        }}
      >
        Shop Now
      </Button>
    </Box>
  );
}

export default OurStoryComponent;