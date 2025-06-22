import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ReactPlayer from 'react-player/youtube';

const verticalVideoUrls = [
    'https://www.youtube.com/shorts/BwiPQ80gL18',
    'https://www.youtube.com/shorts/EW6DHOxaZ_I',
    'https://www.youtube.com/shorts/lMA0yECu6Sc',
    'https://www.youtube.com/shorts/zYjqlsnTFp8'
];

const VerticalVideoGrid = () => {
    return (
        <Box sx={{ mt: 6 }}>
            <Typography
                variant="h6"
                align="center"
                fontWeight="bold"
                color="#800000"
                gutterBottom
            >
                Shop To Be The Main Character
            </Typography>

            <Grid container spacing={2} justifyContent="center">
                {verticalVideoUrls.map((url, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                aspectRatio: '9 / 16',
                                overflow: 'hidden',
                                borderRadius: 2,
                                boxShadow: 3,
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <ReactPlayer
                                url={url}
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
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default VerticalVideoGrid;
