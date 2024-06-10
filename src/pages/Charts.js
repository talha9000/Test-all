import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
const Charts = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      legend: {
        top: 'bottom'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [50, 250],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          label: {
            formatter: (params) => {
              const imageMap = {
                'rose 1': 'https://cdni.iconscout.com/illustration/premium/thumb/female-avatar-8187688-6590630.png',
                'rose 2': 'https://via.placeholder.com/20',
                'rose 3': 'https://via.placeholder.com/20',
                'rose 4': 'https://via.placeholder.com/20',
                'rose 5': 'https://via.placeholder.com/20',
                'rose 6': 'https://via.placeholder.com/20',
                'rose 7': 'https://via.placeholder. /20',
                'rose 8': 'https://via.placeholder.com/20'
              };
              const imageUrl = imageMap[params.name] || 'https://via.placeholder.com/20';
              return `{image|}{name|${params.name}}`;
            },
            rich: {
              image: {
                height: 320,
                align: 'center',
                backgroundColor: {
                  image: 'placeholder' // placeholder for the actual image URL
                }
              },
              name: {
                color: '#000',
                align: 'center',
                padding: [0, 0, 0, 6]
              }
            }
          },
          data: [
            { value: 40, name: 'rose 1' },
            { value: 38, name: 'rose 2' },
            { value: 32, name: 'rose 3' },
            { value: 30, name: 'rose 4' },
            { value: 28, name: 'rose 5' },
            { value: 26, name: 'rose 6' },
            { value: 22, name: 'rose 7' },
            { value: 18, name: 'rose 8' }
          ]
        }
      ]
    };
    // Dynamically set the image URL in the rich text
    option.series[0].data.forEach(item => {
      const imageMap = {
        'rose 1': 'https://cdni.iconscout.com/illustration/premium/thumb/female-avatar-8187688-6590630.png',
        'rose 2': 'https://cdni.iconscout.com/illustration/premium/thumb/female-avatar-8187688-6590630.png',
        'rose 3': 'https://via.placeholder.com/20',
        'rose 4': 'https://via.placeholder.com/20',
        'rose 5': 'https://via.placeholder.com/20',
        'rose 6': 'https://via.placeholder.com/20',
        'rose 7': 'https://via.placeholder.com/20',
        'rose 8': 'https://via.placeholder.com/20'
      };
      item.label = {
        rich: {
          image: {
            height: 20,
            align: 'center',
            backgroundColor: {
              image: imageMap[item.name] || 'https://via.placeholder.com/20'
            }
          },
          name: {
            color: '#000',
            align: 'center',
            padding: [0, 0, 0, 6]
          }
        }
      };
    });
    myChart.setOption(option);
    // Clean up chart instance on component unmount
    return () => {
      myChart.dispose();
    };
  }, []);
  return (
    <div className='cc'>
      <div ref={chartRef} style={{ width: '100%', height: '500px' }} />
    </div>
  );
};
export default Charts;