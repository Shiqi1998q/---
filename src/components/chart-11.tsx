import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';
import { px } from '../shared/px';
import { randGenerator } from '../lib/createNum';

export const Chart11 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null)
  const data = [
    { value: 0.36, name: '刑事案件' },
    { value: 0.20, name: '民事案件' },
    { value: 0.18, name: '经济案件' },
    { value: 0.24, name: '其他案件' },
  ]
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];

  useEffect(() => {
    setInterval(() => {
      const _newData = randGenerator(4, 100)
      const newData = [
        { value: _newData[1], name: '刑事案件' },
        { value: _newData[2], name: '民事案件' },
        { value: _newData[3], name: '经济案件' },
        { value: _newData[0], name: '其他案件' },
      ]
      x(newData)
    }, 1500);

  }, [])
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      color: colors,
      xAxis: { show: false },
      yAxis: { show: false },
      legend: { show: false },
      series: [
        {
          startAngle: -20,
          type: 'pie',
          radius: ['25%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'outside', textStyle: { color: 'white', fontSize: px(20) },
            distanceToLabelLine: 0,
            formatter(options) {
              return Math.floor(options.value * 100) + '%';
            }
          },
          labelLine: { show: true, length: 0 },
          roseType: 'area',
          itemStyle: {
            shadowBlur: px(200),
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          data: data.map(i => i),
        }
      ]
    }));
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)
  }, []);

  return (
    <div className="chart11">
      <div className="chart">
        <div className="main" ref={divRef} />
      </div>
      <div className="legend">
        <span style={{ background: colors[0] }} />刑事
        <span style={{ background: colors[1] }} />民事
        <span style={{ background: colors[2] }} />经济
        <span style={{ background: colors[3] }} />其他
      </div>
    </div>
  );
};
