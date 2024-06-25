import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Scatter = ({data=[],type="scatter"}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      xAxis: {},
      yAxis: {},
      series: [
        {
          symbolSize: 20,
          data: {data},
          type:{type}
        }
      ]
    };
    myChart.setOption(option);

    // Cleanup on unmount
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default Scatter;
