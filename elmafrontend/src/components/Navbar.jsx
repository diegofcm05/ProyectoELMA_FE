import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '/src/components/styles.css';

import logo from '/Images/LogoELMA2.png';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Productos', path: '/productos' },
    { label: 'Contacto', path: '/contacto' },
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#f5f5f2', height: '85px' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: '85px !important',
          px: 2,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="elma logo" style={{ height: '60px' }} />
        </Box>

        {/* Menú grande */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              sx={{
                fontFamily: 'CarmenSansExtraBold',
                fontWeight: 'bold',
                fontSize: '20px',
                textTransform: 'none',
                color: '#0171bb',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#01aef0',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ color: '#0171bb' }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: {
                width: '250px',
              },
            }}
          >
            <List>
              {navItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontFamily: 'CarmenSansExtraBold',
                        fontSize: '18px',
                        color: '#0171bb',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
