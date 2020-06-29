import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const HometownData = () => {
    const data = {
        labels: ['愛知県', '愛媛県', '宮崎県', '山口県', '神奈川県', '石川県', '千葉県', '大阪府', '大分県', '長野県', '東京都', '福岡県', '兵庫県'],
        datasets: [{
            label: '出身地',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 6, 1, 3, 22]
          }
        ]
      };

    return(
        <div>
            <h3>出身地</h3>
            <Bar
                data={data}
                width={100}
                height={50}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}

export default HometownData;
