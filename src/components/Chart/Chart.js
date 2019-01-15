import React from 'react';
import { Polar } from 'react-chartjs-2';
import './Chart.css';

const Chart = ({ data }) => {
  let legend = { display: false };
  const isTouchDevice = window.matchMedia('(hover: none)');
  if (isTouchDevice.matches) {
    legend = {
      display: true,
      position: 'bottom',
      labels: { usePointStyle: true },
    };
  }

  return (
    <div className="chart-wrapper">
      {data === undefined ? (
        <h2>Loading...</h2>
      ) : (
        <Polar
          data={data}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            layout: {
              padding: 10,
            },
            scale: {
              ticks: {
                suggestedMin: 0,
                suggestedMax: 50
              },
            },
            legend,
            tooltips: {
              callbacks: {
                title(tooltipItem, data) {
                  return data.labels[tooltipItem[0].index];
                },
                label(tooltipItem, data) {
                  return ` ${data.datasets[0].data[tooltipItem.index]} %`;
                },
              },
            },
            backgroundColor: 'rgba(0,0,0,0.7)',
            titleFontSize: 12,
            titleFontColor: '#fff',
            bodyFontColor: '#fff',
            bodyFontSize: 12,
            displayColors: true
          }}
        />
      )}
    </div>
  );
};

export default Chart;
