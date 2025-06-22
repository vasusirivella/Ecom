import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';

// Import images (replace with your actual image paths relative to this file)
import cherryRedImage from '../images/img/cherry_red.jpg';
import gulparKurtiImage from '../images/img/gulpar_kurti.jpg';
import theMailShirtImage from '../images/img/the_mail_shirt.jpg';
import cherryKurtiImage from '../images/img/cherry_kurti.jpg';

const imagesData = [
    { name: 'Cherry Red', src: cherryRedImage },
    { name: 'Gulpar Kurti', src: gulparKurtiImage },
    { name: 'The Mail Shirt', src: theMailShirtImage },
    { name: 'Cherry Kurti', src: cherryKurtiImage },
];

function ImageGallery() {
    return (
        <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    mb: 4,
                    py: 1,
                    px: 3,
                    display: 'inline-block',
                    backgroundColor: '#F8E7EE',
                    borderRadius: '8px',
                }}
            >
                Image Gallery
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {imagesData.map((image, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                            sx={{
                                maxWidth: 280,
                                mx: 'auto',
                                border: '1px solid #eee',
                                borderRadius: '10px',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                // Alternating rotation based on index
                                transform: index % 2 === 0 ? 'rotate(-3deg)' : 'rotate(3deg)', // Rotate left for even, right for odd
                                '&:hover': {
                                    transform: index % 2 === 0 ? 'rotate(-3deg) scale(1.05)' : 'rotate(3deg) scale(1.05)',
                                    boxShadow: 6,
                                },
                                // Add a slight margin-bottom to account for rotation overlap if needed
                                mb: 2,
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={image.src}
                                alt={image.name}
                                sx={{ objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                            />
                            <CardContent sx={{ textAlign: 'center', py: 1 }}>
                                <Typography variant="subtitle1" component="div" sx={{ fontWeight: 600 }}>
                                    {image.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ImageGallery;