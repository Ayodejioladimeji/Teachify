import React, { useContext } from 'react';
import '../styles/featuredInfo.css';
import { Computer, PeopleOutlined, PeopleRounded } from '@material-ui/icons';
import { GlobalState } from '../../GlobalState';

const FeaturedInfo = () => {
  const state = useContext(GlobalState);
  const values = state.userApi.values[0];
  const course = state.courses.courses[0];

  const instructor = values.filter((item) => item.role === 'instructor');
  const users = values.filter((item) => item.role === 'Student');

  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Courses</span>
        <div className='featuredMoneyContainer'>
          <Computer className='featuredIcon' />
          <span className='featuredMoney'>{course.length}</span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Students</span>
        <div className='featuredMoneyContainer'>
          <PeopleOutlined className='featuredIcon' />
          <span className='featuredMoney'>{users.length}</span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Instructors</span>
        <div className='featuredMoneyContainer'>
          <PeopleRounded className='featuredIcon' />
          <span className='featuredMoney'>{instructor.length}</span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
