// src/components/NewLaunchSection.jsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

  
import newLaunch1 from '../images/women/Naira.jpg';
import newLaunch2 from '../images/women/Peach.jpg';
import newLaunch3 from '../images/women/Glori.jpg';
import newLaunch4 from '../images/women/Anika.jpg';

const newLaunchProducts = [
  {
    id: 1,
    name: 'The fabulous spencer, holy colors upon',
    originalPrice: '₹ 999.00',
    newPrice: '₹ 599.00',
    subtitle: 'Chunavani shabana',
    image: newLaunch1,
    // Approximate clip-paths for irregular shapes
    clipPath: 'polygon(50% 0%, 90% 10%, 100% 40%, 95% 70%, 75% 95%, 25% 100%, 5% 70%, 0% 30%, 10% 10%)',
    // Rotate slightly for effect
    transform: 'rotate(-3deg)',
  },
  {
    id: 2,
    name: 'The fabulous spencer, holy colors upon',
    originalPrice: '₹ 999.00',
    newPrice: '₹ 599.00',
    subtitle: 'Chunavani shabana',
    image: newLaunch2,
    clipPath: 'polygon(50% 0%, 90% 20%, 100% 50%, 80% 90%, 50% 100%, 20% 90%, 0% 50%, 10% 20%)',
    transform: 'rotate(5deg)',
  },
  {
    id: 3,
    name: 'The fabulous spencer, holy colors upon',
    originalPrice: '₹ 999.00',
    newPrice: '₹ 599.00',
    subtitle: 'Chunavani shabana',
    image: newLaunch3,
    clipPath: 'polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)',
    transform: 'rotate(-7deg)',
  },
  {
    id: 4,
    name: 'The fabulous spencer, holy colors upon',
    originalPrice: '₹ 999.00',
    newPrice: '₹ 599.00',
    subtitle: 'Chunavani shabana',
    image: newLaunch4,
    clipPath: 'polygon(50% 0%, 90% 10%, 100% 40%, 95% 70%, 75% 95%, 25% 100%, 5% 70%, 0% 30%, 10% 10%)',
    transform: 'rotate(2deg)',
  },
];

function NewLaunchSection() {
  return (
    <Box sx={{ textAlign: 'center', mt: 8, pb: 8 }}>
      <Typography variant="h5" component="h3" sx={{ mb: 6, fontWeight: 600, color: '#333' }}>
        New Launch
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {newLaunchProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2,
              }}
            >
              <Box
                sx={{
                  width: '250px', // Adjust size as needed
                  height: '250px', // Adjust size as needed
                  borderRadius: '50%', // Fallback or base shape for clipping
                  overflow: 'hidden', // Ensures content stays within the clip path
                  backgroundColor: '#f0f0f0', // Placeholder background
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative', // For absolute positioning of border if needed
                  // Apply custom clip-path
                  clipPath: product.clipPath,
                  WebkitClipPath: product.clipPath, // For Webkit browsers
                  transform: product.transform, // Apply rotation
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: `${product.transform} scale(1.03)`, // Scale on hover
                  },
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                 {/* Small "Sale" label - assuming it's part of the image,
                     or can be added as an absolutely positioned Typography.
                     Adding a simple placeholder here. */}
                <Typography
                    variant="caption"
                    sx={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        color: 'white',
                        px: 1,
                        py: 0.5,
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        fontWeight: 'bold',
                        zIndex: 1,
                    }}
                >
                    Sale
                </Typography>
              </Box>

              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography variant="body1" sx={{ fontWeight: 500, color: '#4A2B2B', lineHeight: 1.3 }}>
                  {product.name}
                </Typography>
                <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: 1 }}>
                  <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
                    {product.originalPrice}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#B04B72' }}>
                    {product.newPrice}
                  </Typography>
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                  {product.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default NewLaunchSection;