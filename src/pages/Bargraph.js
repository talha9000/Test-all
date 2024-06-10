import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const Bargraph = () => {
  useEffect(() => {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: 'Rainfall vs Evaporation',
        subtext: 'Fake Data'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Rainfall', 'Evaporation']
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec','sf','sf','sf','sf','sf','sf','sf','sf','sf','sf','sf','sf','sf','sf','sf','sf','sf','sf','sf','sf','sf','sf','sf','sf']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Rainfall',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          label: {
            show: true,
            position: 'top',
            formatter: function(params) {
              return `{image|}${params.name}`;
            },
            rich: {
              image: {
                height: 20,
                width: 20,
                align: 'center',
                backgroundColor: {
                  image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg' // replace this with your image URL
                }
              }
            }
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        },
        {
          name: 'Evaporation',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          markPoint: {
            data: [
              { name: 'Max', value: 3.2, xAxis: 7, yAxis: 183 },
              { name: 'Min', value: 222.3, xAxis: 11, yAxis: 3 }
            ]
          },
          label: {
            show: true,
            position: 'top',
            formatter: function(params) {
              return `{image|}${params.name}`;
            },
            rich: {
              image: {
                height: 20,
                width: 20,
                align: 'center',
                backgroundColor: {
                  image: 'https://png.pngtree.com/png-vector/20191116/ourmid/pngtree-business-office-girl-avatar-icon-vector-download-png-image_1991055.jpg' // replace this with your image URL
                }
              }
            }
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        }
      ]
    };

    option && myChart.setOption(option);
  }, []);

  return (
    <div className='cc' id="main" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default Bargraph;
