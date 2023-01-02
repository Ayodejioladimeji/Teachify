import React from 'react';
import './Why.css';
// import book from '../../assets/Book.svg';
import datas from '../../constants/Why';

const Why = () => {
  return (
    <div className='why'>
      <div className='why-div'>
        <h3>WHY CHOOSE TEACHIFY</h3>
        <p>
          Unified Learning Platform helps students develops and delivers rich
          learning resources that empowers learners to gain mastery.
        </p>
      </div>
      <div className='why-center'>
        {datas.map((data) => (
          <div className='why-box' key={data.id}>
            <div className='why-image' id={data.color}>
              <img src={data.icon} alt='' />
            </div>
            <h3>{data.title}</h3>
            <span>{data.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
