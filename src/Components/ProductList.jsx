import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import ReactPlayer from 'react-player/youtube';
import niraImage from '../images/women/Naira.jpg';
import peachImage from '../images/women/Peach.jpg';
import gloriImage from '../images/women/Glori.jpg';
import anikaImage from '../images/women/Anika.jpg';
import aalImage from '../images/men/02.jpg';
import desiImage from '../images/men/o1.jpg';
import VerticalVideoGrid from './VerticalVideoGrid';
import ImageGallery from './ImageGallery';
import TestimonialsSection from './TestimonialsSection';
import NewLaunchSection from './NewLaunchSection';

const womenCollections = [
  { title: 'Naira', image: niraImage },
  { title: 'Peach', image: peachImage },
  { title: 'Glori', image: gloriImage },
  { title: 'Anika', image: anikaImage },
];

const menCollections = [
  { title: 'Aal Stylish Look', image: aalImage },
  { title: 'The Desi Parade', image: desiImage },
  { title: 'The Swadeshi Vibes', image: aalImage },
  { title: 'All Rounder', image: desiImage },
];

// Marquee Text Component
const MarqueeText = () => (
  <Box
    sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      mt: 2,
    }}
  >
    <Typography
      sx={{
        display: 'inline-block',
        animation: 'scroll-left 60s linear infinite', // slower speed
        color: '#D56C7E',
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: 1,
      }}
    >
      {Array(15).fill('☼ Welcome to the Pehrin where Pinterest meets your interest ').join(' ✿ ')}
    </Typography>

    {/* Keyframes for marquee animation */}
    <style>
      {`
        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}
    </style>
  </Box>
);

// Collections Grid
const CollectionGrid = ({ title, items }) => (
  <Box sx={{ my: 6 }}>
    <Typography
      variant="h6"
      align="center"
      fontWeight="bold"
      color="#800000"
      gutterBottom
    >
      {title}
    </Typography>

    <Grid container spacing={3} justifyContent="center">
      {items.map((item, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
              },
            }}
          >
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              height="300"
              sx={{
                transition: 'transform 0.3s',
              }}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="subtitle1" fontWeight={500}>
                {item.title} →
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);


export default function PehrinStyleCollectionPage() {
  return (
    <Box sx={{ backgroundColor: 'whitesmoke' }}>

      {/* WhatsApp Floating Button */}
      <Box
        component="a"
        href="https://wa.me/91934" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'fixed',
          bottom: { xs: 16, md: 24 },
          right: { xs: 16, md: 24 },
          zIndex: 1000,
          backgroundColor: '#25D366',
          borderRadius: '50%',
          width: 56,
          height: 56,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: 3,
          '&:hover': {
            boxShadow: 6,
            backgroundColor: '#1ebc59',
          },
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: 28, height: 28 }}
        />
      </Box>
      {/* Full-Width Autoplay Background Video */}
      <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ArTTnbFxeLs"
          playing
          muted
          loop
          controls={false}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                controls: 0,
                fs: 0,
                disablekb: 1,
              },
            },
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
          }}
        />
      </Box>

      {/* Women Section */}
      <CollectionGrid title="Women Collections" items={womenCollections} />

      {/* Marquee Text */}
      <MarqueeText />

      {/* Men Section */}
      <CollectionGrid title="Men Collections" items={menCollections} />

      <VerticalVideoGrid />

      <ImageGallery />
      <TestimonialsSection />

      <NewLaunchSection />

    </Box>
  );
}
