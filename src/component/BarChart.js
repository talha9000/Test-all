import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { DatePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const BarChart = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Add logic to update the chart data based on the selected date
    // For example, fetch new data or update the state with the new data
  };

  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <DatePicker onChange={handleDateChange} placeholder="Select Date" />
      </div>
      <ReactECharts
        option={option}
        style={{ height: '400px', width: '100%' }}
      />
    </div>
  );
};

export default BarChart;
