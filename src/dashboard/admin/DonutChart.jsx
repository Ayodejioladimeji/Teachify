import React, { useState, useContext } from 'react';
// import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';
import { GlobalState } from './../../GlobalState';

const DonutChart = () => {
  const state = useContext(GlobalState);
  const [values] = state.userApi.values;
  const data = [];

  const instructor = values.filter((item) => item.role === 'instructor');
  //   const users = values.filter((item) => item.role === 'Student');

  console.log(instructor.length);
  const dat = instructor.length;

  // THE CHART SECTION
  const [series] = useState(dat);
  console.log(series);
  const [options] = useState({
    chart: {
      type: 'donut',
    },
    responsive: [
      {
        // breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  });

  return (
    <ReactApexChart
      options={options}
      series={series}
      type='donut'
      width='100%'
      height='100%'
    />
  );
};
export default DonutChart;
