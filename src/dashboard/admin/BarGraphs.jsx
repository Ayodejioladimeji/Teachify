import React from 'react';
import '../styles/BarGraphs.css';
import DonutChart from './DonutChart';

const BarGraphs = () => {
  return (
    <div className='bar_graphs'>
      <div className='donut'>
        <DonutChart />
      </div>
    </div>
  );
};

export default BarGraphs;
