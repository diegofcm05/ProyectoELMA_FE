
import Hero from '../components/Hero';
import HeroCarousel from '../components/HeroCarousel';
import MissionSection from '../components/MissionSection';
import SeccionTrap from '../components/SeccionTrap';

const Home = () => {
  return (
    <div>
      
      <Hero/>
      <SeccionTrap
        nombre="Agua Pura. Siempre Fresca."
        cita="La pureza del agua es la base de nuestra salud. En ELMA, nos comprometemos a ofrecerte agua purificada de la más alta calidad."
        imagen="/Images/personaagua1.jpg"
        colorFondo="#0a99e6"
        invertir={false}
        superponer={false}
        zIndex={2}
        invertirDiagonal={true}
        finalTest={false}
      />
      <SeccionTrap
        nombre="Hidratación con Propósito."
        cita="Nuestros productos están diseñados para satisfacer tus necesidades diarias de hidratación con la pureza que solo ELMA puede ofrecer."
        imagen="/Images/imagenhome1.jpg"
        colorFondo="#56bdf5"
        invertir={true}
        superponer={true}
        zIndex={1}
        invertirDiagonal={true}
        finalTest={true}
      />
      <MissionSection/>
    </div>
  );
};

export default Home;