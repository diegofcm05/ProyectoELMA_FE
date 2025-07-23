import React from 'react';
import { Box, Typography } from '@mui/material';
import fondo from '/Images/fondohome.jpg';
const Hero = () => {
  return (
    <Box
      sx={{
        height: '60vh',
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#ffffff',
        position: 'relative',
        paddingTop: '85px',
      }}
    >
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 4, width: '100%', borderRadius: 2 }}>
        <Typography variant="h2" sx={{ fontFamily: 'CarmenSansExtraBold', mb: 2 }}>
          Agua Purificada ELMA
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: 'CarmenSansExtraBold' }}>
          Empoderando el desarrollo local
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
