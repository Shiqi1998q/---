import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';
import { px } from '../shared/px';
import { randGenerator } from '../lib/createNum';


export const Chart4 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = randGenerator(13, 100)
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        splitLine: { show: true, lineStyle: { color: '#073E78' } },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      yAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: '#073E78' } },
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [{
        type: 'line',
        data: data.map(i => i),
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: { width: px(2) },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#414a9f'
          }, {
            offset: 1,
            color: '#1b1d52'
          }]),
        }
      }]
    }));
  }
  useEffect(() => {
    setInterval(() => {
      const newData = randGenerator(13, 100)
      x(newData)
    }, 1500)
  })
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)
  }, []);

  return (
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
function creatNum(arg0: number, arg1: number) {
  throw new Error('Function not implemented.');
}

