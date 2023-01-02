import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './RoadDetails.css';
import { roadmap } from '../../constants/Roadmap';
import Loader from 'react-loader-spinner';

const RoadMap = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      roadmap.forEach((item) => {
        if (item.id === id) {
          setData(item);
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        }
      });
    }
  }, [id]);

  if (loading) {
    return (
      <div className='loadingss'>
        <Loader type='Circles' color='#00B87C' height={54} width={54} />
      </div>
    );
  }

  return (
    <div className='road-details'>
      <div className='road-details-top'>
        <h4>{data.title}</h4>
        <p>{data.text}</p>
      </div>
      <div className='road-details-center'>
        <div className='road-image'>
          <img src={data.img} alt='' />
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
