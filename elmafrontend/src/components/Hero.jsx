import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import fondo from '/Images/fondohome2.jpg';

const Hero = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#ffffff',
        position: 'relative',
        paddingTop: { xs: '70px', sm: '85px' }, // Menor en pantallas pequeñas
        px: 2,
      }}
    >
      <Box
        sx={{
          p: { xs: 2, sm: 4 },
          width: '100%',
          maxWidth: '1200px',
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Amio',
            mb: 2,
            fontSize: {
              xs: '4rem',
              sm: '5rem',
              md: '6rem',
              lg: '7rem',
            },
          }}
        >
          Agua Purificada ELMA
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontFamily: 'CarmenSansExtraBold',
            fontSize: {
              xs: '1.2rem',
              sm: '1.5rem',
              md: '2rem',
            },
          }}
        >
          La pureza que te mereces.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
