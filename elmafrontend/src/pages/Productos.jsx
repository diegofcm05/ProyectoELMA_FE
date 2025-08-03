import React, { useState } from 'react';
import { Typography, Box, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import BottleImage from '../assets/ELMA.jpg';
import SizeSelector from '../components/SizeSelector';

const Productos = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleOrder = () => {
    if (selectedSize) {
      alert(`Has pedido una botella de agua mineral de ${selectedSize}. ¡Gracias!`);
    } else {
      alert('Por favor selecciona un tamaño antes de pedir.');
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // md ~960px

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(to bottom, #ffffff 50%, #d9edfb 50%)',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 4,
      }}
    >
      {/* IZQUIERDA */}
      <Box
      marginTop={10}
        sx={{
          width: isMobile ? '100%' : '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mb: isMobile ? 4 : 0,
        }}
      >
        <img src={BottleImage} alt="Botella Agua" width={isMobile ? 180 : 260} />
        <Typography variant={isMobile ? 'h5' : 'h4'} fontWeight={800} mt={2}>
          MINERAL
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOrder}
          sx={{ mt: 2, borderRadius: 5, px: 4 }}
        >
          Pedir
        </Button>
      </Box>

      {/* DERECHA */}
      <Box
        sx={{
          width: isMobile ? '100%' : '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography marginTop={5}variant={isMobile ? 'h5' : 'h4'} fontWeight={800} align="center" gutterBottom>
          TAMAÑOS
        </Typography>
        <SizeSelector selected={selectedSize} onSelect={setSelectedSize} />
      </Box>
    </Box>
  );
};

export default Productos;
