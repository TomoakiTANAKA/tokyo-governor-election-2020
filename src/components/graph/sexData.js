import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const SexData = () => {
    const data = {
        labels: [
            '女性',
            '男性'
        ],
        datasets: [{
            data: [3, 19],
            backgroundColor: [
            '#FF6384',
            '#36A2EB'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB'
            ]
        }]
    };

    return(
        <div>
            <h3>性別</h3>
            <div>
                <Pie data={data}/>
            </div>
        </div>
    )
}

export default SexData;
