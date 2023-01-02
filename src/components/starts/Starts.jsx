import React, { useContext } from 'react';
import './Starts.css';
import StartCard from './StartCard';
import { GlobalState } from '../../GlobalState';
import Loader from 'react-loader-spinner';

const Starts = () => {
  const state = useContext(GlobalState);
  const [user] = state.userApi.user;
  const [course] = state.course.course;
  const [loading] = state.course.loading;
  // const [loading, setLoading] = useState(true);

  let featuredCourses = course.filter((item) => item.type === 'Start');

  if (loading || featuredCourses.length === 0) {
    return (
      <div className='loadings'>
        <Loader type='Circles' color='#00B87C' height={54} width={54} />
      </div>
    );
  }
  return (
    <div className='starts'>
      <div className='starts-top'>
        <h2>Let's start Learning, {user.username}</h2>
        <p>My Learning</p>
      </div>

      <div className='starts-bottom'>
        <div className='card'>
          <div className='card-body'>
            {featuredCourses.map(
              (item, index) =>
                index <= 2 && <StartCard {...item} key={item._id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starts;
