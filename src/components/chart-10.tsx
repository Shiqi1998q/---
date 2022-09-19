import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';
import { randGenerator } from '../lib/createNum';

export const Chart10 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [40, 22, 20, 18, 32]
  useEffect(() => {
    setInterval(() => {
      const newData = randGenerator(5, 100)
      x(newData);
    }, 1500);
  }, []);
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      xAxis: {
        data: ['入室抢劫', '当街偷盗', '团伙诈骗', '刑事案件', '民事案件'],
        axisTick: { show: false },
        axisLine: {
          lineStyle: { color: '#083B70' }
        },
        axisLabel: {
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },

      yAxis: {
        splitLine: { show: false },
        axisLine: {
          show: true,
          lineStyle: { color: '#083B70' }
        }
      },
      series: [{
        type: 'bar',
        data: data.map(i => i),
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#0A97FB'
        }, {
          offset: 1,
          color: '#1E34FA'
        }]),
      }]
    }));
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)
  }, []);

  return (
    <div ref={divRef} className="chart">

    </div>
  );
};
