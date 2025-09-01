import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Products from './pages/Products';
import Contacto from './pages/Contacto';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Asegura que la página se desplace hacia arriba al cambiar de ruta */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;