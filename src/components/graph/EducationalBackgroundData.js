import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const EducationalBackgroundData = () => {
    const data = {
        labels: ['大学卒業', '高校卒業', '大学中退', '中学卒業', '大学院生卒業', '専門学校卒業', '高専卒業', '高校中退'],
        
        datasets: [{
            label: '最終学歴',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [10, 4, 3, 1, 1, 1, 1, 1]
          }
        ]
      };

    return(
        <div>
            <h3>学歴</h3>
            <Bar
                data={data}
                width={100}
                height={300}
                options={{
                    barPercentage: 0.5,
                    barThickness: 6,
                    maxBarThickness: 8,
                    minBarLength: 2,
             
                    maintainAspectRatio: false,

                    scales: {
                        xAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true
                                }
                            }],
                        yAxes: [{
                                display: true,
                                ticks: {
                                    beginAtZero: true,
                                    steps: 2,
                                    stepValue: 5,
                                    max: 12
                                }
                            }]
                    },
                }}
            />
        </div>
    )
}

export default EducationalBackgroundData;
