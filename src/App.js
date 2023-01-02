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
