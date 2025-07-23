import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import '/src/components/styles.css'

import logo from '/Images/LogoELMA.png';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#f5f5f2', height: '85px' }}>
      <Toolbar
        sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						minHeight: '80px !important',
				}}>
        {/* Logo en la izquierda */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="elma logo"
            style={{ height: '60px' }}
          />
        </Box>
        <Box>
          <Button sx={{ fontFamily: 'CarmenSansExtraBold', fontWeight: 'bold', fontSize: '20px', textTransform: 'none', color: '#0171bb', transition: 'color 0.3s ease', '&:hover': {color: '#01aef0', } }} component={Link} to="/">Inicio</Button>
          <Button sx={{ fontFamily: 'CarmenSansExtraBold', fontWeight: 'bold', fontSize: '20px', textTransform: 'none', color: '#0171bb', transition: 'color 0.3s ease','&:hover': {color: '#01aef0', } }} component={Link} to="/productos">Productos</Button>
          <Button sx={{ fontFamily: 'CarmenSansExtraBold', fontWeight: 'bold', fontSize: '20px', textTransform: 'none', color: '#0171bb', transition: 'color 0.3s ease','&:hover': {color: '#01aef0', } }} component={Link} to="/contacto">Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
