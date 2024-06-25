import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const DynamicCharts = ({ xline = [], xgraph = [], minval_line, maxval_line, minval_bg, maxval_bg, xvalue_type = "category", yvalue_type = "value", bardata, linedata ,legends={}}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Static Data'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#283b56'
          }
        }
      },
      legend:{legends},
      toolbox: {
        show: true,
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      dataZoom: {
        show: false,
        start: 0,
        end: 100
      },
      xAxis: [
        {
          type: xvalue_type,
          boundaryGap: true,
          data: xline
        },
        {
          type: xvalue_type,
          boundaryGap: true,
          data: xgraph
        }
      ],
      yAxis: [
        {
          type: yvalue_type,
          scale: true,
          name: 'Price',
          max: maxval_line,
          min: minval_line,
          boundaryGap: [0.2, 0.2]
        },
        {
          type: yvalue_type,
          scale: true,
          name: 'Order',
          max: maxval_bg,
          min: minval_bg,
          boundaryGap: [0.2, 0.2]
        }
      ],
      series: [
        {
          name: 'Static Bar',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: bardata,
          barWidth: '3%'
        },
        {
          name: 'Static Line',
          type: 'line',
          data: linedata
        }
      ]
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, [xline, xgraph, minval_line, maxval_line, minval_bg, maxval_bg, xvalue_type, yvalue_type, bardata, linedata]);

  return <div id="main" ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default DynamicCharts;
