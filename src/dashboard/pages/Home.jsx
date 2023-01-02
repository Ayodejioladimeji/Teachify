import { useContext } from 'react';
import FeaturedInfo from '../components/FeaturedInfo';
import '../styles/home.css';
import NewUsers from '../admin/NewUsers';
import { GlobalState } from './../../GlobalState';
// import Greetings from './../components/Greetings';
import SEO from './../../SEO/SEO';
// import BarGraphs from './../admin/BarGraphs';

export default function DashboardHome() {
  const state = useContext(GlobalState);

  const [isOpen] = state.isOpen;

  return (
    <div className={`${isOpen ? 'response' : 'home'}`}>
      <SEO title='Dashboard Home' />
      <FeaturedInfo />
      {/* <BarGraphs /> */}
      <NewUsers />
    </div>
  );
}
