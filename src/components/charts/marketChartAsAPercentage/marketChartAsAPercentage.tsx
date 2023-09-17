import * as React from 'react';
import Chart from "react-apexcharts";
import {useState} from "react";

const series = [
    {
        name: 'Магнит',
        data: [2.0, 3.8, 3.6, 1.8, 3.3, 3.1, 4.0, 3.6, 4.3, 3.9, 3.4, 2.9]
    },
    {
        name: 'Яндекс Лавка',
        data: [4.1, 5.0, 5.7, 6.2, 6.2, 5.9, 5.8, 6.0, 5.7, 5.6, 5.4, 5.9]
    },
    {
        name: 'Пятерочка',
        data: [8.1, 7.4,  9.6, 9.4, 9.6, 10.2, 10.0, 12.6, 12.4, 12.2, 12.4, 13.7]
    }
]



export const MarketChartAsAPercentage = () => {

    const [options, setOptions] = useState({
        series,
        chart: {
            id: "basic-bar",
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false,
            },
        },
        distributed: true,
        dataLabels: {
            enabled: true,
            offsetY: -5,
            style: {
                fontSize: '9px',
                foreColor: '#61210F'
            }
        },
        markers: {
            size: 2
        },
        colors: ['#77B6EA', '#545454', '#E75A7C'],
        yaxis: {
            logarithmic: false,
            logBase: 5,
            tickAmount: 6
        },
        xaxis: {
            categories: ['01.2020', '02.2020', '03.2020', '04.2020', '05.2020', '06.2020', '07.2020', '08.2020', '09.2020', '10.2020', '11.2020', '12.2020'],
            tickPlacement: 'between'
        }
    })

    return (
        <div>
            <Chart
                options={options}
                series={options.series}
                type="line"
                height="500"
                width='900'
            />
        </div>
    );
};

