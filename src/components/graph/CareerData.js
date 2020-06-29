import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const CareerData = () => {
    const data = {
        labels: ['自営業・その他', '会社員＋政治家', '士業', '会社員', '公務員', '会社役員＋自営業・その他', '会社役員＋公務員', 'タレント＋政治家'],
        datasets: [{
            label: '職歴',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [10, 4, 2, 2, 1, 1, 1, 1]
          }
        ]
      };

    return(
        <div>
            <h3>職歴</h3>
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

export default CareerData;
