// src/components/organisms/SizeSelector.jsx
import React from 'react';
import { Grid } from '@mui/material';
import SizeOption from './SizeOption';
import bottleIcon from '../assets/bottle_icon.png';
import pouchIcon from '../assets/Bolsita.png';
import botellon from '../assets/Botellon.png';
import botellita from '../assets/botellita.jpg';

const sizes = [
  { label: '250 ml', icon: pouchIcon },
  { label: '500 ml', icon: botellita },
  { label: '600 ml', icon: bottleIcon },
  { label: '1 Litro', icon: botellon },
];

const SizeSelector = ({ selected, onSelect }) => {
  return (
    <Grid item xs={6} sm={6} md={6} container spacing={3} justifyContent="center">
      {sizes.map((size) => (
        <Grid item key={size.label}>
          <SizeOption
            label={size.label}
            icon={size.icon}
            selected={selected === size.label}
            onClick={() => onSelect(size.label)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SizeSelector;

