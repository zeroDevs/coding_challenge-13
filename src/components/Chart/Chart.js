import React from 'react';
import {Polar} from 'react-chartjs-2';
import './Chart.css';

    const Chart = ({data, legend}) => {

        return(
            <div>
                {data===undefined
                    ?   <h2>Loading...</h2>
                    :   <Polar
                            data={data}
                            options={{
                                maintainAspectRatio: true,
                                responsive: true,
                                scale: {
                                    ticks: {
                                        suggestedMin: 0,
                                        suggestedMax: 50
                                    }
                                },
                                legend: {
                                    position: legend
                                },
                                tooltips: {
                                  callbacks: {
                                    title: function(tooltipItem, data) {
                                      return data['labels'][tooltipItem[0]['index']];
                                    },
                                    label: function(tooltipItem, data) {
                                      return '  '+data['datasets'][0]['data'][tooltipItem['index']]+'%';
                                    }
                                  }
                                }
                            }}
                        />
                }

            </div>
        );
    }


export default Chart;
