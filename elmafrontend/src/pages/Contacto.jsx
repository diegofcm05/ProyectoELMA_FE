import React from "react";
import { useState } from "react";
import { Container, Typography, TextField, Button, Box, Paper } from "@mui/material";


const Contacto = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Formulario enviado: ", formData);
    alert("Gracias por contactarnos!");
  };


  return (
    <div style={{ padding: '90px'}}>
      <Container maxWidth="sm" sx={{ pt: 10 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'CarmenSansExtraBold' }}>
            Contacto
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={4}
              required
            />
            <Box mt={2} textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default Contacto;