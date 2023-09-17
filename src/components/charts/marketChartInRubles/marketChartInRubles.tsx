import React, {useState} from 'react';
import Chart from "react-apexcharts";

export const MarketChartInRubles = () => {

    const series = [
        {
            name: 'Магнит',
            data: [4.0, 5.8, 5.6, 3.8, 4.3, 4.1, 6.0, 5.6, 6.3, 5.9, 5.4, 3.9]
        },
        {
            name: 'Яндекс Лавка',
            data: [7.1, 6.0, 6.7, 7.2, 7.2, 6.9, 6.8, 7.0, 6.7, 6.6, 6.4, 6.9]
        },
        {
            name: 'Пятерочка',
            data: [11.1, 10.4,  9.6, 10.4, 9.6, 11.2, 11.0, 12.6, 12.4, 12.2, 12.4, 13.7]
        }
    ]

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
        colors: ['#77B6EA', '#03256C', '#004F2D'],
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

