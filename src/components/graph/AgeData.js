import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const AgeDate = () => {
    const data = {
        labels: ['山本　太郎', '小池　百合子', '七海　ひろこ', '宇都宮　健児', '桜井　誠', '込山　洋', '小野　泰輔', '竹本　秀之', '西本　誠', '関口　安弘', '押越　清悦', '服部　修', '立花　孝志', '斉藤　健一郎', '後藤　輝樹', '澤　紫臣', '市川　浩司', '石井　均', '長澤　育弘', '牛尾　和恵', '平塚　正幸', '内藤　久遠'],
        
        datasets: [{
            label: '年齢',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [45, 67, 35, 73, 48, 46, 46, 64, 33, 68, 61, 46, 52, 39, 37, 44, 58, 55, 34, 33, 38, 63]
          }
        ]
      };

    return(
        <div>
            <h3>年齢</h3>
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
                                    steps: 10,
                                    stepValue: 5,
                                    max: 100
                                }
                            }]
                    },
                }}
            />
        </div>
    )
}

export default AgeDate;
