import React from 'react';
import {Polar} from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [11, 16, 9, 14],
    backgroundColor: [
        'rgba(255,99,132,0.7)',
        'rgba(75,192,192,0.7)',
        'rgba(255,206,86,0.7)',
        'rgba(231,233,237,0.7)',
        'rgba(54,162,235,0.7)'
    ],
    label: 'Some Dataset'
  }],
  labels: ['Global Job Demand', 'US Job Demand', 'Startup Job Demand', 'Remote Job Demand']
};

const SourceChart = () => {

    return(
        <div>
           <h5 className="mb-4">Love by Community: 4 / 5</h5>
           <Polar
                data={data}
                height={300}
                width={300}
                options={{
                    maintainAspectRatio: true,
                    responsive: true,
                    legend: {
                        position: true
                    },
                    tooltips: {
                      callbacks: {
                        title: function(tooltipItem, data) {
                          return data['labels'][tooltipItem[0]['index']];
                        },
                        label: function(tooltipItem, data) {
                          return data['datasets'][0]['data'][tooltipItem['index']];
                        }
                      },
                      backgroundColor: '#FFF',
                      titleFontSize: 16,
                      titleFontColor: '#0066ff',
                      bodyFontColor: '#000',
                      bodyFontSize: 14,
                      displayColors: false
                    }
                }}
            />

        </div>
    );
}


export default SourceChart;
