import React, { useState, useContext } from 'react';
import './FeaturedCourse.css';
import { Computer } from '@material-ui/icons';
import { GlobalState } from '../../GlobalState';
import Card from './../card/Card';
import Loader from 'react-loader-spinner';

const NewCourses = () => {
  const state = useContext(GlobalState);
  const [course] = state.course.course;
  const [loading] = state.course.loading;
  const [load, setLoad] = useState(false);

  let featuredCourses = course.filter((item) => item.type === 'Featured');

  const [visible, setVisible] = useState(10);

  const showItems = () => {
    setLoad(true);
    setTimeout(() => {
      setVisible((prevState) => prevState + 5);
      setLoad(false);
    }, 2500);
  };

  if (loading || featuredCourses.length === 0) {
    return (
      <div className='loadings'>
        <Loader type='Circles' color='#00B87C' height={54} width={54} />
      </div>
    );
  }

  return (
    <section className='new-course'>
      <div className=''>
        <h2 className='pb-0'>
          <Computer className='favourite-cat' />
          FEATURED COURSES
        </h2>
        <p className='mb-4'>
          Top quality courses has been featured, hand picked by us
        </p>
      </div>
      <div className='data-center'>
        {featuredCourses.slice(0, visible).map((course) => (
          <Card {...course} key={course._id} />
        ))}
      </div>

      <div className='load-more mt-4 text-center'>
        <button onClick={showItems} className='btn btn-primary mb-3'>
          {load ? (
            <div className='d-flex'>
              <Loader type='Oval' color='#fff' height={24} width={24} />
              &nbsp; Loading
            </div>
          ) : (
            'Load more'
          )}
        </button>
      </div>
    </section>
  );
};

export default NewCourses;
