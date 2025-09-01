import React, { useState } from "react";
import "./ProductCards.css";

const products = [
  {
    id: 1,
    title: "Portatil 250ml",
    img: "/Images/PortatilBlanco.jpg",
    hoverImg: "/Images/AguaPiscina1.jpg", // <-- opcional, si quieres imagen distinta al hover
    description: "Descripción detallada del Producto 1. Aquí van las especificaciones del agua.",
  },
  {
    id: 2,
    title: "Portatil 500ml",
    img: "/Images/PortatilenGrama5.jpg",
    hoverImg: "/Images/AguaPiscina1.jpg",
    description: "Descripción detallada del Producto 2. Aquí van las especificaciones del agua.",
  },
  {
    id: 3,
    title: "Portatil 600ml",
    img: "/Images/PortatilenGrama4.jpg",
    hoverImg: "/Images/AguaPiscina1.jpg",
    description: "Descripción detallada del Producto 3. Aquí van las especificaciones del agua.",
  },
  {
    id: 4,
    title: "Portatil 1L",
    img: "/Images/PortatilenGrama3.jpg",
    hoverImg: "/Images/AguaPiscina1.jpg",
    description: "Descripción detallada del Producto 4. Aquí van las especificaciones del agua.",
  },
  {
    id: 5,
    title: "Bolsas de Agua",
    img: "/Images/BolsaAgua.jpg",
    hoverImg:  "/Images/BolsaAgua.jpg",
    description: "Descripción detallada del Producto 5. Aquí van las especificaciones del agua.",
  },
  {
    id: 6,
    title: "Garrafon",
    img: "/Images/GalonAgua2.jpg",
    hoverImg: "/Images/GalonAgua2.jpg",
    description: "Descripción detallada del Producto 6. Aquí van las especificaciones del agua.",
  },
];

export default function ProductCards() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="products-section">
      <h2 className="section-title">Conoce Nuestras Presentaciones</h2>

      <div className="cards-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="card-img-wrapper">
              <img src={product.img} alt={product.title} className="card-img base" />
              <img src={product.hoverImg} alt={product.title} className="card-img hover" />
            </div>
            <h3 className="card-title">{product.title}</h3>
            <button className="card-btn" onClick={() => handleOpen(product)}>
              Leer más
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-img">
              <img src={selectedProduct.img} alt={selectedProduct.title} />
            </div>
            <div className="modal-text">
              <h1>{selectedProduct.title}</h1>
              <h3>{selectedProduct.description}</h3>
              <button className="close-btn" onClick={handleClose}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}