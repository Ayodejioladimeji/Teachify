import React from 'react';
import './RoadMap.css';
import { roadmap } from '../../constants/Roadmap';
import { Link } from 'react-router-dom';

const RoadMap = () => {
  return (
    <div className='roadmap'>
      <div className='roadmap-top'>
        <h4>SOFTWARE DEVELOPMENT ROAD MAP</h4>
      </div>
      <div className='road-center'>
        {roadmap.map((item) => (
          <Link key={item.id} to={`/roadmap_details/${item.id}`}>
            <div className='road-card' style={{ background: item.color }}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
