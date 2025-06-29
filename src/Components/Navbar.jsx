import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorElWomen, setAnchorElWomen] = React.useState(null);
  const [anchorElMen, setAnchorElMen] = React.useState(null);
  const [showSearch, setShowSearch] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <AppBar position="fixed" sx={{ background: 'rgba(238, 170, 195, 0.8)', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Hamburger Icon for Mobile */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#333' }}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ color: '#800000', textDecoration: 'none', fontWeight: 'bold' }}
          >
            पाहरण
          </Typography>

          {/* Navigation Tabs for Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Button component={Link} to="/" sx={{ color: '#333' }}>
              Home
            </Button>

            {/* Women Menu */}
            <Box
              onMouseEnter={(e) => setAnchorElWomen(e.currentTarget)}
              onMouseLeave={() => setAnchorElWomen(null)}
            >
              <Button sx={{ color: '#333' }}>Women</Button>
              <Menu
                anchorEl={anchorElWomen}
                open={Boolean(anchorElWomen)}
                onClose={() => setAnchorElWomen(null)}
                MenuListProps={{
                  onMouseEnter: () => setAnchorElWomen(anchorElWomen),
                  onMouseLeave: () => setAnchorElWomen(null),
                }}
              >
                <MenuItem component={Link} to="/women/pooh">Pooh</MenuItem>
                <MenuItem component={Link} to="/women/naina">Naina</MenuItem>
                <MenuItem component={Link} to="/women/geet">Geet</MenuItem>
                <MenuItem component={Link} to="/women/aisha">Aisha</MenuItem>
                <MenuItem component={Link} to="/women/all">All Women</MenuItem>
              </Menu>
            </Box>

            {/* Men Menu */}
            <Box
              onMouseEnter={(e) => setAnchorElMen(e.currentTarget)}
              onMouseLeave={() => setAnchorElMen(null)}
            >
              <Button sx={{ color: '#333' }}>Men</Button>
              <Menu
                anchorEl={anchorElMen}
                open={Boolean(anchorElMen)}
                onClose={() => setAnchorElMen(null)}
                MenuListProps={{
                  onMouseEnter: () => setAnchorElMen(anchorElMen),
                  onMouseLeave: () => setAnchorElMen(null),
                }}
              >
                <MenuItem component={Link} to="/men/half-style-street-look">Half Style Street Look</MenuItem>
                <MenuItem component={Link} to="/men/the-desi-formals">The Desi Formals</MenuItem>
                <MenuItem component={Link} to="/men/the-sanskari-drips">The Sanskari Drips</MenuItem>
                <MenuItem component={Link} to="/men/all-rounders">All Rounders</MenuItem>
                <MenuItem component={Link} to="/men/all">All Men</MenuItem>
              </Menu>
            </Box>

            <Button component={Link} to="/our-story" sx={{ color: '#333' }}>
              Our Story
            </Button>
            <Button component={Link} to="/contact-us" sx={{ color: '#333' }}>
              Contact Us
            </Button>
          </Box>

          {/* Icons */}
          <Box>
            <IconButton onClick={() => setShowSearch(true)} sx={{ color: '#333' }}>
              <SearchIcon />
            </IconButton>
            <IconButton component={Link} to="/login" sx={{ color: '#333' }}>
              <AccountCircleIcon />
            </IconButton>
            <IconButton component={Link} to="/cart" sx={{ color: '#333' }}>
              <ShoppingBagIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/women/all">
              <ListItemText primary="Women" />
            </ListItem>
            <ListItem button component={Link} to="/men/all">
              <ListItemText primary="Men" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/our-story">
              <ListItemText primary="Our Story" />
            </ListItem>
            <ListItem button component={Link} to="/contact-us">
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Search Input */}
      {showSearch && (
        <Box
          sx={{
            position: 'fixed',
            top: { xs: 56, sm: 64 },
            width: '100%',
            backgroundColor: '#fff',
            zIndex: 1200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            boxShadow: 3,
          }}
        >
          <input
            type="text"
            placeholder="Search"
            autoFocus
            style={{
              width: '80%',
              padding: '12px 20px',
              border: '2px solid maroon',
              borderRadius: '30px',
              fontSize: '16px',
              color: 'maroon',
              outline: 'none',
            }}
          />
          <IconButton onClick={() => setShowSearch(false)} sx={{ ml: 1 }}>
            <Typography sx={{ color: 'maroon', fontSize: 24 }}>✕</Typography>
          </IconButton>
        </Box>
      )}

      {/* Spacer to offset fixed AppBar */}
      <Box sx={{ height: { xs: 56, sm: 64 } }} />
    </>
  );
};

export default Navbar;
