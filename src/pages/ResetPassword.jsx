import Header from '../components/header/Header';
import Footer from './../components/footer/Footer';
import Reset from './../components/reset/ResetPassword';
import SEO from './../SEO/SEO';

const ResetPassword = () => {
  return (
    <div>
      <SEO title='Reset Password' />
      <Header />
      <Reset />
      <Footer />
    </div>
  );
};

export default ResetPassword;
