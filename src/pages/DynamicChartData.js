// pages/DynamiChartData.jsx
import React from 'react';
import DynamicChart from '../component/DynamicCharts'

const DynamiChartData = () => {
  // Example data
  const xline = ['2024-06-24 12:00', '2024-06-24 12:02', '2024-06-24 12:04', '2024-06-24 12:06', '2024-06-24 12:08'];
  const xgraph = [0, 1, 2, 3, 4];
  const bardata = [820, 932, 901, 934, 1290];
  const linedata = [5.0, 6.2, 7.1, 6.5, 8.0];
  const minval_line = 0;
  const maxval_line = 10;
  const minval_bg = 0;
  const maxval_bg = 1500;

  return (
    <div className='pt-33'>
      <DynamicChart 
        xline={xline}
        xgraph={xgraph}
        minval_line={minval_line}
        maxval_line={maxval_line}
        minval_bg={minval_bg}
        maxval_bg={maxval_bg}
        xvalue_type="category"
        yvalue_type="value"
        bardata={bardata}
        linedata={linedata}
      />
    </div>
  );
};

export default DynamiChartData;
