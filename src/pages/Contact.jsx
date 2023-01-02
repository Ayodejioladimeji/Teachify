import Header from '../components/header/Header';
import Footer from './../components/footer/Footer';
import ContactUs from './../components/contact/ContactUs';
import SEO from './../SEO/SEO';

const Contact = () => {
  return (
    <div>
      <SEO title='Contact Us' />
      <Header />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Contact;
