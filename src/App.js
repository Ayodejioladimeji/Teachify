import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/scroll/ScrollToTop';
import './Global.css';
import Routes from './routes/Routes';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes />
      </ScrollToTop>
    </Router>
  );
};

export default App;

// We serve cookies.
// We use tools, such as cookies, to enable essential services and functionality on our site and to collect data on how visitors interact with our site, products and services. By clicking Accept or continuing to use this site, you agree to our use of these tools for advertising and analytics. Learn More
