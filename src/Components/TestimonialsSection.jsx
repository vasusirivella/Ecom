import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Rating,
  IconButton,
  Paper,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    review: "Received the parcel and I lovedddddd it ❤️🥰❤️ Thank youuuuu soo much for such a beautiful piece! ✨",
    author: "Tarshika Sharma",
  },
  {
    id: 2,
    rating: 5,
    review: "Thankk youu so much everything is perfect,the colour, the fabric, the fitting 😇😇😇😇",
    author: "Juvandita",
  },
  {
    id: 3,
    rating: 5,
    review: "Im soo happy n with the quality 🤩",
    author: "Pranjal Rajput",
  },
  {
    id: 4,
    rating: 4.5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "A. Customer",
  },
];

function TestimonialsSection() {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 6,
          py: 1,
          px: 3,
          display: 'inline-block',
          backgroundColor: '#F8E7EE',
          borderRadius: '8px',
        }}
      >
        हमारी नहीं हमारी अप्सराओ की सुनो
      </Typography>

      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {testimonialsData.map((testimonial) => (
          <Grid item xs={12} sm={6} md={3} key={testimonial.id}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                borderRadius: '10px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Rating
                name={`testimonial-rating-${testimonial.id}`}
                value={testimonial.rating}
                readOnly
                sx={{ mb: 1 }}
              />
              <Typography variant="body1" sx={{ flexGrow: 1, mb: 2 }}>
                {testimonial.review}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                {testimonial.author}
              </Typography>
            </Paper>
          </Grid>
        ))}

        {/* Navigation Buttons */}
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
          <IconButton aria-label="previous review">
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="next review">
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TestimonialsSection;
