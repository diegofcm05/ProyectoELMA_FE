// src/components/molecules/SizeOption.jsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const SizeOption = ({ label, icon, selected, onClick }) => {
  return (
    <Paper
      onClick={onClick}
      elevation={selected ? 6 : 2}
      sx={{
        p: 2,
        textAlign: 'center',
        borderRadius: 2,
        border: selected ? '2px solid #2a9df4' : '2px solid transparent',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        width: 240,
        height: 190,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box component="img" src={icon} alt={label} sx={{ width: 80, mb: 1 }} />
      <Typography>{label}</Typography>
    </Paper>
  );
};

export default SizeOption;
