import React from "react";
import { useState } from "react";
import { Container, Typography, TextField, Button, Box, Paper, Stack, FormControl, Card, CardContent, Grid, Input, InputLabel, FormHelperText } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import fondo from '/Images/fondohome2.jpg';


const quickLinks = [
  {
    title: "FAQs",
    description: "Resolvemos todas tus dudas sobre productos, servicios y más.",
    icon: "❓",
  },
  {
    title: "Soporte de Equipo",
    description: "Instalación, manuales de productos y garantías.",
    icon: "⚙️",
  },
  {
    title: "Pedidos & Devoluciones",
    description: "Políticas de envío, devoluciones y cómo iniciar un proceso.",
    icon: "📦",
  },
]

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
    <Box sx={{ position: "relative", overflow: "hidden", pt: 2 }}>

      <Box sx={(theme) => theme.mixins.toolbar} />

      {/* Hero de contacto  */}
      <Box
        sx={{
          background: "#0171BB",
          color: "white",
          textAlign: "center",
        }}
      >
        <Stack spacing={3} paddingTop={4}>
          <Typography variant="h3" fontWeight="bold" sx={{
            fontFamily: "CarmenSansExtraBold"
          }}>
            Ponte en contacto
          </Typography>
          <Typography variant="h5" sx={{
            fontFamily: "CarmenSansExtraBold"
          }}>
            ¡Estamos aqui para ayudarte!
          </Typography>

        </Stack>

        {/*Curva */}
        <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          sx={{
            width: "100%",
            height: { xs: 80, sm: 120, md: 180 }, // altura responsiva
            display: "block",
          }}
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,160L40,144C80,128,160,96,240,112C320,128,400,192,480,192C560,192,640,128,720,85.3C800,43,880,21,960,42.7C1040,64,1120,128,1200,176C1280,224,1360,256,1400,272L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </Box>
      </Box>

      {/*Quick Links */}
      <Box
        sx={{
          background: "white",
          textAlign: "center",
        }}
      >

        <Stack spacing={3}>
          <Typography variant="h4" sx={{ fontFamily: "CarmenSansExtraBold" }}>
            Enlaces rapidos
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap"
            }}
          >
            {/*Map aqui de enlaces rapidos */}
            <Grid container spacing={4} justifyContent={"center"}>
              {quickLinks.map((link, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      width: 280,
                      height: 250,
                      borderRadius: 3,
                      boxShadow: 3,
                      textAlign: "center",
                      p: 2,
                      mb: 3,
                    }}
                  >
                    <CardContent>
                      <Typography variant="h2" sx={{ mb: 1 }}>
                        {link.icon}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontFamily: "CarmenSansExtraBold", mb: 1 }}
                      >
                        {link.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "CarmenSansExtraBold" }}>
                        {link.description}
                      </Typography>
                    </CardContent>
                  </Card>

                </Grid>
              ))}
            </Grid>

          </Box>

        </Stack>


      </Box>

      {/*Formulario */}
      <Box sx={{ display: "flex", p: 4, justifyContent: "center" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            {/*Form */}
            <Stack spacing={2} sx={{ paddingTop: 1, paddingBottom: 3 }}>
              <Typography variant="h4" sx={{ fontFamily: "CarmenSansExtraBold" }}>
                Contáctanos
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "CarmenSansExtraBold", color: "text.secondary" }}>
                Envíanos un mensaje y te responderemos en 2 días hábiles.
              </Typography>

            </Stack>

            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Mensaje"
                name="mensaje"
                multiline
                minRows={4}
                maxRows={10}
                value={formData.mensaje}
                onChange={handleChange}
                fullWidth
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {/*Info de contacto */}
            <Box sx={{ color: "black", p: 2 }}>
              <Stack spacing={4}>
                {/* Call */}
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <PhoneIcon sx={{ fontSize: 32, color: "#0171bb" }} />
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ fontFamily: "CarmenSansExtraBold", color: "#0171bb" }}
                    >
                      Llámanos
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                      Estamos disponibles de lunes a viernes.
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", mt: 1 }}>
                      Teléfono:
                    </Typography>
                    <Typography color="primary">+504 3168-8438</Typography>
                  </Box>
                </Box>

                {/* Write */}
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <EmailIcon sx={{ fontSize: 32, color: "#0171bb" }} />
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ fontFamily: "CarmenSansExtraBold", color: "#0171bb" }}
                    >
                      Escríbenos
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                      Nos encanta recibir tus mensajes.
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", mt: 1 }}>
                      Correo:
                    </Typography>
                    <Typography color="primary">
                      elmaaguapurificada@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </Box>

  );
};

export default Contacto;