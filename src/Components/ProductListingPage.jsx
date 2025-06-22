// src/components/ProductListingPage.jsx
import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Button,
    Menu,
    MenuItem,
    Divider,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useLocation, useParams } from 'react-router-dom'; // Import useParams
import { allProducts } from '../Data/products';


function ProductListingPage() {
    const { categoryName } = useParams();
    const location = useLocation();
    const currentPath = location.pathname;

    console.log('Category Name:', categoryName);
    console.log('Current Path:', currentPath);

    let productsToDisplay = [];

    if (categoryName) {
        // Case: Specific category like /women/pooh
        productsToDisplay = allProducts.filter(product => product.category === categoryName);
    } else {
        // Case: Path is just /women or /men → filter by gender
        if (currentPath.includes('/women')) {
            productsToDisplay = allProducts.filter(product => product.gender === 'women');
        } else if (currentPath.includes('/men')) {
            productsToDisplay = allProducts.filter(product => product.gender === 'men');
        }
    }

    // You might want to capitalize the category name for display
    const displayCategoryName = categoryName ? categoryName.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'All Products';

    const [anchorElAvailability, setAnchorElAvailability] = React.useState(null);
    const [anchorElPrice, setAnchorElPrice] = React.useState(null);
    const [anchorElSort, setAnchorElSort] = React.useState(null);

    const handleMenuOpen = (event, setAnchor) => {
        setAnchor(event.currentTarget);
    };
    const handleMenuClose = (setAnchor) => {
        setAnchor(null);
    };

    return (
        <Box sx={{ p: { xs: 2, sm: 4 }, backgroundColor: '#FDFCFE', minHeight: '100vh' }}>
            <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 4, fontWeight: 600, color: '#4A2B2B' }}>
                {displayCategoryName}
            </Typography>

            {/* Filter and Sort Bar */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 4,
                    flexWrap: 'wrap',
                    gap: { xs: 1, sm: 2 }
                }}
            >
                <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 } }}>
                    {/* Filter Button */}
                    <Button
                        variant="outlined"
                        onClick={(e) => handleMenuOpen(e, setAnchorElAvailability)}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                            color: '#333',
                            borderColor: '#ccc',
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontSize: { xs: '0.8rem', sm: '0.9rem' }
                        }}
                    >
                        Filter
                    </Button>
                    <Menu
                        anchorEl={anchorElAvailability}
                        open={Boolean(anchorElAvailability)}
                        onClose={() => handleMenuClose(setAnchorElAvailability)}
                    >
                        <MenuItem onClick={() => handleMenuClose(setAnchorElAvailability)}>Availability</MenuItem>
                        {/* Add more filter options */}
                    </Menu>

                    {/* Price Button */}
                    <Button
                        variant="outlined"
                        onClick={(e) => handleMenuOpen(e, setAnchorElPrice)}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                            color: '#333',
                            borderColor: '#ccc',
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontSize: { xs: '0.8rem', sm: '0.9rem' }
                        }}
                    >
                        Price
                    </Button>
                    <Menu
                        anchorEl={anchorElPrice}
                        open={Boolean(anchorElPrice)}
                        onClose={() => handleMenuClose(setAnchorElPrice)}
                    >
                        <MenuItem onClick={() => handleMenuClose(setAnchorElPrice)}>Low to High</MenuItem>
                        <MenuItem onClick={() => handleMenuClose(setAnchorElPrice)}>High to Low</MenuItem>
                        {/* Add more price filter options */}
                    </Menu>
                </Box>

                {/* Sort By Button */}
                <Box>
                    <Button
                        variant="outlined"
                        onClick={(e) => handleMenuOpen(e, setAnchorElSort)}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                            color: '#333',
                            borderColor: '#ccc',
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontSize: { xs: '0.8rem', sm: '0.9rem' }
                        }}
                    >
                        Sort By: Best Selling
                    </Button>
                    <Menu
                        anchorEl={anchorElSort}
                        open={Boolean(anchorElSort)}
                        onClose={() => handleMenuClose(setAnchorElSort)}
                    >
                        <MenuItem onClick={() => handleMenuClose(setAnchorElSort)}>Best Selling</MenuItem>
                        <MenuItem onClick={() => handleMenuClose(setAnchorElSort)}>Newest</MenuItem>
                        <MenuItem onClick={() => handleMenuClose(setAnchorElSort)}>Price: Low to High</MenuItem>
                        <MenuItem onClick={() => handleMenuClose(setAnchorElSort)}>Price: High to Low</MenuItem>
                        {/* Add more sort options */}
                    </Menu>
                </Box>
            </Box>

            <Divider sx={{ mb: 4 }} />

            {/* Product Grid */}
            <Grid container spacing={3} justifyContent="center">
                {productsToDisplay.length > 0 ? (
                    productsToDisplay.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={2.4} key={product.id}>
                            <Card
                                sx={{
                                    borderRadius: '10px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    },
                                }}
                            >
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={product.image}
                                        alt={product.name}
                                        sx={{ objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
                                    />
                                    {product.isSale && (
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 10,
                                                left: 10,
                                                backgroundColor: 'rgba(0,0,0,0.7)',
                                                color: 'white',
                                                px: 1,
                                                py: 0.5,
                                                borderRadius: '4px',
                                                fontSize: '0.7rem',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Sale
                                        </Box>
                                    )}
                                </Box>
                                <CardContent sx={{ textAlign: 'center', py: 2 }}>
                                    <Typography variant="body1" sx={{ fontWeight: 500, lineHeight: 1.3, mb: 1 }}>
                                        {product.name}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: 1 }}>
                                        {product.originalPrice && (
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ textDecoration: 'line-through' }}
                                            >
                                                {product.originalPrice}
                                            </Typography>
                                        )}
                                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#4A2B2B' }}>
                                            {product.salePrice}
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <Box sx={{ px: 2, pb: 2, display: 'flex', justifyContent: 'center' }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderColor: '#4A2B2B',
                                            color: '#4A2B2B',
                                            borderRadius: '8px',
                                            textTransform: 'none',
                                            py: 1,
                                            px: 3,
                                            '&:hover': {
                                                backgroundColor: '#4A2B2B',
                                                color: 'white',
                                                borderColor: '#4A2B2B',
                                            },
                                        }}
                                    >
                                        Choose options
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h6" color="text.secondary" sx={{ mt: 4 }}>
                        No products found for this category.
                    </Typography>
                )}
            </Grid>
        </Box>
    );
}

export default ProductListingPage;