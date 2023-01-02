import Header from '../components/header/Header';
import Footer from './../components/footer/Footer';
import RoadDetails from '../components/roadMap/RoadDetails';
import SEO from './../SEO/SEO';

const Roadmap = () => {
  return (
    <div>
      <SEO title='RoadMap Details' />
      <Header />
      <RoadDetails />
      <Footer />
    </div>
  );
};

export default Roadmap;
