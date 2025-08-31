import React, { useState, useEffect } from "react";
import "./ProductCards.css"; // crea este archivo (ver más abajo)
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";

const products = [
  {
    id: 1,
    title: "Producto 1",
    img: "/images/producto1.jpg",
    shortDesc: "Refrescante y pura para tu día.",
    longDesc:
      "Esta presentación de agua purificada es ideal para consumo diario. Proporciona la hidratación que necesitas con la mejor calidad y pureza garantizada.",
  },
  {
    id: 2,
    title: "Producto 2",
    img: "/images/producto2.jpg",
    shortDesc: "Perfecta para compartir en familia.",
    longDesc:
      "Nuestra presentación familiar está diseñada para satisfacer las necesidades de todos en casa, manteniendo la frescura y pureza que nos caracteriza.",
  },
  {
    id: 3,
    title: "Producto 3",
    img: "/images/producto3.jpg",
    shortDesc: "Ideal para llevar contigo.",
    longDesc:
      "Presentación portátil y ligera, para que puedas hidratarte en cualquier momento y lugar sin comprometer la calidad.",
  },
  {
    id: 4,
    title: "Producto 4",
    img: "/images/producto4.jpg",
    shortDesc: "La mejor opción para eventos y negocios.",
    longDesc:
      "Nuestra presentación empresarial ofrece un formato práctico y económico, ideal para reuniones, eventos y oficinas.",
  },
];

const ProductCards = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  // Manejo del scroll del body (evita salto por la scrollbar)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (open) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.addEventListener("keydown", onKey);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Conoce Nuestras Presentaciones
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={product.img}
                alt={product.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.shortDesc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => openModal(product)}>
                  Leer más
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal hecho con CSS y React */}
      {open && selectedProduct && (
        <div className="custom-modal-overlay" onClick={closeModal}>
          <div
            className="custom-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()} // evita que el click en el modal cierre todo
          >
            <button className="modal-close" onClick={closeModal} aria-label="Cerrar">
              &times;
            </button>

            <div className="modal-inner">
              <div className="modal-media">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.title}
                />
              </div>

              <div className="modal-divider" aria-hidden="true" />

              <div className="modal-body">
                <h2 id="modal-title">{selectedProduct.title}</h2>
                <Typography variant="body1">{selectedProduct.longDesc}</Typography>
              </div>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
};

export default ProductCards;
