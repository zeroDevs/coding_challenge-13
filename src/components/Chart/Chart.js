import React from 'react';
import { Polar } from 'react-chartjs-2';
import './Chart.css';

const Chart = ({ data, legend }) => (
  <div>
    {data === undefined ? (
      <h2>Loading...</h2>
    ) : (
      <Polar
        data={data}
        options={{
          maintainAspectRatio: true,
          responsive: true,
          layout: {
            padding: 10,
          },
          scale: {
            ticks: {
              suggestedMin: 0,
              suggestedMax: 50,
            },
          },
          legend: {
            position: legend,
          },
          tooltips: {
            callbacks: {
              title(tooltipItem, data) {
                return data.labels[tooltipItem[0].index];
              },
              label(tooltipItem, data) {
                return `  ${data.datasets[0].data[tooltipItem.index]}%`;
              },
            },
          },
        }}
      />
    )}
  </div>
);

export default Chart;
